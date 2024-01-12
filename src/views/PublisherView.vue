<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

import { useBooksStore } from '@/stores/books'

import TheLoading from '@/components/TheLoading.vue'
import TheError from '@/components/TheError.vue'
import BookList from '@/components/BookList.vue'
import PageButtons from '@/components/PageButtons.vue'

import { BooksAPI } from '@/api/books'

const route = useRoute()
const store = useBooksStore()
const { searchParams } = store

searchParams.publisher = route.params.publisherName as string

const {
  isPending: bookListIsPending,
  isError: bookListIsError,
  data: bookListData
} = useQuery({
  queryKey: ['bookList', searchParams],
  queryFn: () => BooksAPI.list(searchParams)
})
</script>

<template>
  <div>
    <the-loading v-if="bookListIsPending"></the-loading>
    <the-error v-if="bookListIsError"></the-error>
    <template v-if="!bookListIsPending && !bookListIsError && bookListData">
      <book-list :books="bookListData.data.docs"></book-list>
      <page-buttons :page-counts="bookListData.data['TOTAL_COUNT']"></page-buttons>
    </template>
  </div>
</template>
