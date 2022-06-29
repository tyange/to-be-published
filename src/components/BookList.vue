<script setup lang="ts">
import { computed } from "vue";
import { useBooksStore } from "@/stores/books";
import BookItem from "./BookItem.vue";

const store = useBooksStore();

const books = computed(() => store.getBooks);

const handler = () => {
  console.log(store.getBooks);
};
</script>

<template>
  <ul>
    <button v-on:click="store.fetchBooks()">fetch</button>
    <button v-on:click="handler">handler</button>
    <li v-for="book in books.docs" :key="book.EA_ISBN">
      <BookItem :title="book.TITLE" :pre_price="book.PRE_PRICE" :author="book.AUTHOR" :pre_date="book.PUBLISH_PREDATE"
                :isbn="book.EA_ISBN" :publisher="book.PUBLISHER" />
    </li>
  </ul>
</template>
