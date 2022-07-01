<script setup lang="ts">
import { computed } from "vue";
import { useBooksStore } from "@/stores/books";
import BookItem from "./BookItem.vue";

const store = useBooksStore();

const books = computed(() => store.getBooks);
</script>

<template>
  <ul class="w-full flex flex-col gap-3">
    <li v-for="book in books" :key="book.EA_ISBN" class="border rounded-xl w-full p-3 shadow-md">
      <BookItem :title="book.TITLE" :pre_price="book.PRE_PRICE" :author="book.AUTHOR" :pre_date="book.PUBLISH_PREDATE"
                :isbn="book.EA_ISBN" :publisher="book.PUBLISHER" />
    </li>
  </ul>
</template>
