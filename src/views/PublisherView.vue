<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { BooksAPI } from '@/api/books'
import type { SearchParams } from '@/types/searchParams'

const route = useRoute()

onMounted(() => {
  const params: SearchParams = {
    page_no: 1,
    page_size: import.meta.env.VITE_PAGE_SIZE as number,
    cert_key: import.meta.env.VITE_SEOJI_API_KEY as string,
    result_style: 'json',
    deposit_yn: 'N',
    order_by: 'DESC',
    sort: 'PUBLISH_PREDATE',
    publisher: route.params.publisherName as string
  }

  BooksAPI.list(params)
})
</script>

<template>
  <div class="overflow-hidden">hi</div>
</template>
