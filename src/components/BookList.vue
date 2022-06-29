<script setup lang="ts">
import { computed } from "vue";
import { useBooksStore } from "@/stores/books";

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
      {{ book.TITLE }}
    </li>
  </ul>
</template>
