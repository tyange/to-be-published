<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import PublisherGrid from '@/components/PublisherGrid.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full gap-5 bg-blue-100 xs:gap-0 xs:h-screen xs:grid xs:items-center"
  >
    <the-header></the-header>
    <publisher-grid></publisher-grid>
    <the-footer></the-footer>
  </div>
</template>
