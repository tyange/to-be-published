<script setup lang="ts">
import type { Publisher } from '@/types/publisher'

defineProps<{ index: number; item: Publisher }>()
defineEmits<{
  (name: 'click-handler', e: Event): void
}>()
</script>
<template>
  <button
    class="w-20 h-20 m-4 overflow-hidden border border-gray-200 rounded-full cursor-pointer publisher-dot"
    :data-index="index"
    @click="$emit('click-handler', $event)"
  >
    <img :src="item.publisherImageSrc" alt="출판사 로고" />
  </button>
</template>
