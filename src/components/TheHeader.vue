<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex flex-col gap-5 w-[672px]">
      <router-link to="/" class="flex items-end w-fit">
        <span class="text-4xl font-bold font-gowun-batang">출간예정도서 검색기</span>
      </router-link>
      <div class="flex flex-col flex-1 gap-1">
        <p class="text-xs italic font-gowun-batang">
          아래의 출판사 버튼을 클릭하시면 각 출판사의 출간예정도서 목록을 보실 수 있습니다.
        </p>
        <p class="text-xs italic font-gowun-batang">
          (실제 출간일과 차이가 있을 수 있으니 주의하세요!)
        </p>
      </div>
    </div>
  </header>
</template>
