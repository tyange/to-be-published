<script setup lang="ts">
import { useBooksStore } from "@/stores/books";

const store = useBooksStore();

const handler = () => {
  console.log(store.getBooks);
};
</script>

<template>
  <ul>
    <li>
      <button v-on:click="handler">handler</button>
      <button v-on:click="store.fetchBooks()">fetch handler</button>
    </li>
  </ul>
</template>
