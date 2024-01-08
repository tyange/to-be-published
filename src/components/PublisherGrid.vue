<script setup lang="ts">
import { ref } from 'vue'

import PublisherDot from './PublisherDot.vue'

const gridWidth = ref(6)
const gridHeight = ref(7)
</script>

<template>
  <div class="grid w-fit" :style="{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }">
    <div v-for="gw in gridWidth" :key="gw">
      <publisher-dot v-for="gh in gridHeight" :key="gh"></publisher-dot>
    </div>
  </div>
</template>
