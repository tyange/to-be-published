<script setup lang="ts">
defineProps<{ index: number }>()
defineEmits<{
  (name: 'click-handler', e: Event): void
}>()
</script>
<template>
  <div
    class="w-20 h-20 m-4 border-2 rounded-full publisher-dot"
    :data-index="index"
    @click="$emit('click-handler', $event)"
  ></div>
</template>
