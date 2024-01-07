<script setup lang="ts">
import { useBooksStore } from '@/stores/books'

const store = useBooksStore()
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <p>서지정보 API의 오류로 인해 데이터를 불러 오지 못했습니다.<br />다시 시도해주세요.</p>
    <button
      v-on:click="store.fetchBooksByPageNo(1)"
      class="p-3 mt-3 bg-blue-100 border rounded-lg hover:bg-blue-300"
    >
      검색 조건 그대로 다시 검색
    </button>
  </div>
</template>
