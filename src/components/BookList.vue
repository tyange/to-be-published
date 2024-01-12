<script setup lang="ts">
import BookItem from './BookItem.vue'

defineProps(['books'])
</script>
<template>
  <ul class="flex flex-col gap-12 mb-5" ref="bookList">
    <li v-for="(book, index) in books" :key="index" class="w-full p-3 border shadow-md rounded-xl">
      <book-item
        :title="book.TITLE"
        :pre_price="book.PRE_PRICE"
        :author="book.AUTHOR"
        :pre_date="book.PUBLISH_PREDATE"
        :isbn="book.EA_ISBN"
        :publisher="book.PUBLISHER"
      />
    </li>
  </ul>
</template>
