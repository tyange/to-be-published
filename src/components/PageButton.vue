<script setup lang="ts">
import { useBooksStore } from '@/stores/books'
import { computed } from 'vue'

const props = defineProps<{
  pageNum: number
}>()

const store = useBooksStore()
const { searchParams } = store

const fetchBooksByPageNum = (pageNum: number) => {
  searchParams['page_no'] = pageNum
}

const isHighlight = computed(() => {
  if (props.pageNum === searchParams['page_no']) return true

  return false
})
</script>
<template>
  <button
    @click="fetchBooksByPageNum(pageNum)"
    class="px-2 bg-white border-2 rounded-lg shadow-sm"
    :class="{ 'font-semibold bg-neutral-300': isHighlight }"
  >
    {{ pageNum }}
  </button>
</template>
