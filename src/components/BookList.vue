<script setup lang="ts">
import { computed, onUpdated, ref } from "vue";
import { useBooksStore } from "@/stores/books";
import BookItem from "./BookItem.vue";
import TheLoading from "@/components/TheLoading.vue";
import TheError from "@/components/TheError.vue";

const store = useBooksStore();
const bookList = ref<Element | null>(null);

const loadingState = computed(() => store.isLoading);
const error = computed(() => store.error);
const books = computed(() => store.getBooks);

onUpdated(() => {
  if (books.value.length > 0 && bookList.value !== null) {
    bookList.value.scrollIntoView();
  }
});
</script>

<template>
  <ul class="flex flex-col gap-12 mb-5" v-bind:class="{'items-center': loadingState}" ref="bookList">
    <li v-if="loadingState" class="mx-5">
      <TheLoading />
    </li>
    <li v-if="!loadingState && error" class="w-full justify-center mx-5">
      <TheError />
    </li>
    <li v-for="(book, index) in books" :key="index" class="border rounded-xl w-full p-3 shadow-md">
      <BookItem :title="book.TITLE" :pre_price="book.PRE_PRICE" :author="book.AUTHOR" :pre_date="book.PUBLISH_PREDATE"
                :isbn="book.EA_ISBN" :publisher="book.PUBLISHER" />
    </li>
  </ul>
</template>

<style>
@media (min-width: 641px) {
  ul {
    width: 32rem;
  }
}

@media (max-width: 640px) {
  ul {
    width: 95%;
  }
}
</style>
