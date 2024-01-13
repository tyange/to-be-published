<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { Publisher } from '@/types/publisher'

defineProps<{ index: number; item: Publisher }>()
defineEmits<{
  (name: 'click-handler', e: Event): void
}>()
</script>
<template>
  <router-link
    :to="{ name: 'publisher', params: { publisherName: item.publisherName } }"
    class="w-20 h-20 m-4 overflow-hidden transition-transform duration-200 border border-gray-200 rounded-full cursor-pointer publisher-dot hover:-translate-y-5"
    :data-index="index"
    @click="$emit('click-handler', $event)"
  >
    <img :src="item.publisherImageSrc" alt="출판사 로고" />
  </router-link>
</template>
