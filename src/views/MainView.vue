<script setup lang="ts">
import PublisherGrid from '@/components/PublisherGrid.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-amber-100"
  >
    <publisher-grid></publisher-grid>
    <the-footer></the-footer>
  </div>
</template>
