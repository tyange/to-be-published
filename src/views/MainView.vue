<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import PublisherGrid from '@/components/PublisherGrid.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen gap-10 overflow-hidden justify-sp bg-amber-100"
  >
    <the-header></the-header>
    <publisher-grid></publisher-grid>
    <the-footer></the-footer>
  </div>
</template>
