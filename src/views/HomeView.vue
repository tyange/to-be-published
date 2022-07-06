<script setup lang="ts">
import IntroHeader from "@/components/IntroHeader.vue";
import BookList from "../components/BookList.vue";
import BookForm from "@/components/BookForm.vue";
import PageButtons from "@/components/PageButtons.vue";
import { computed } from "vue";
import { useBooksStore } from "@/stores/books";

const store = useBooksStore();
const pageSize = import.meta.env.VITE_PAGE_SIZE;


const pageCounts = computed(() => {
  const dividedTotalCount = store.totalCount / pageSize;
  if(store.totalCount % pageSize === 0) {
    return dividedTotalCount;
  }
  return Math.floor(dividedTotalCount) + 1;
})
</script>

<template>
  <header class="w-full flex justify-center items-center h-48">
    <IntroHeader/>
  </header>
  <main class="w-full flex justify-center items-center">
    <div class="flex w-full p-2 md:p-0 md:w-auto flex-col items-center gap-10">
      <BookForm />
      <BookList />
      <PageButtons v-if="store.totalCount > 0" :page-counts="pageCounts"/>
    </div>
  </main>
</template>
