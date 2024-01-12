<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <p>서지정보 API의 오류로 인해 데이터를 불러 오지 못했습니다.<br />다시 시도해주세요.</p>
    <router-link to="/" class="p-3 mt-3 bg-blue-100 border rounded-lg hover:bg-blue-300">
      첫 페이지로 돌아가기
    </router-link>
  </div>
</template>
