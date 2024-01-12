<script setup lang="ts">
import { computed } from 'vue'

import { useBooksStore } from '@/stores/books'

import PageButton from '@/components/PageButton.vue'

import { generatePageCount } from '@/utils/generatePageCount'

const props = defineProps<{
  pageCounts: string
}>()

const store = useBooksStore()
const { searchParams } = store

const pageNumbers = computed(() => {
  const pageCount = Number(props.pageCounts)
  const pageSize = import.meta.env.VITE_PAGE_SIZE
  const pageNumbersLength = generatePageCount(Number(pageCount), pageSize)

  const pageNumArray = Array.from({ length: pageNumbersLength }, (_, index) => index + 1)

  if (searchParams['page_no'] < 5) {
    return pageNumArray.slice(0, 5)
  } else if (searchParams['page_no'] >= pageCount - 3) {
    return pageNumArray.slice(pageCount - 5, pageCount)
  }

  return pageNumArray.slice(searchParams['page_no'] - 3, searchParams['page_no'] + 2)
})
</script>
<template>
  <div class="flex items-center justify-center my-10 text-gray-500">
    <template v-if="searchParams['page_no'] > 4">
      <page-button :page-num="1" />
      <span class="mx-2"> </span>
    </template>
    <div class="flex gap-2">
      <PageButton v-bind:key="pageNum" v-for="pageNum in pageNumbers" :page-num="pageNum" />
    </div>
    <template v-if="searchParams['page_no'] < Number(pageCounts) - 3">
      <span class="mx-2"> </span>
      <PageButton :page-num="Number(pageCounts)" />
    </template>
  </div>
</template>
