<script setup lang="ts">
import { computed } from 'vue'
import { useBooksStore } from '@/stores/books'

import IntroHeader from '@/components/IntroHeader.vue'
import BookList from '../components/BookList.vue'
import BookForm from '@/components/BookForm.vue'
import PageButtons from '@/components/PageButtons.vue'
import TheFooter from '@/components/TheFooter.vue'

const store = useBooksStore()
const pageSize = import.meta.env.VITE_PAGE_SIZE

const pageCounts = computed(() => {
  const dividedTotalCount = store.totalCount / pageSize
  if (store.totalCount % pageSize === 0) {
    return dividedTotalCount
  }
  return Math.floor(dividedTotalCount) + 1
})
</script>

<template>
  <header class="flex items-center justify-center w-full h-48 mt-5">
    <IntroHeader />
  </header>
  <main class="flex items-center justify-center w-full">
    <div class="flex flex-col items-center w-full gap-10 p-2 md:p-0 md:w-auto">
      <BookForm />
      <BookList />
      <PageButtons v-if="store.totalCount > 0" :page-counts="pageCounts" />
    </div>
  </main>
  <TheFooter />
</template>
