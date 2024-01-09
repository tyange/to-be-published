<script setup lang="ts">
import { ref } from 'vue'

import anime from 'animejs/lib/anime.es.js'

import PublisherDot from './PublisherDot.vue'

const grid = ref([
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42]
])

const dotMouseOverHandler = (e: Event) => {
  const currentTarget = e.target

  console.log((currentTarget as HTMLElement).dataset.index!)

  anime({
    targets: '.publisher-dot',
    scale: [
      { value: 1.15, easing: 'easeOutSine', duration: 250 },
      { value: 1, easing: 'easeInOutQuad', duration: 500 }
    ],
    translateY: [
      { value: -10, easing: 'easeOutSine', duration: 250 },
      { value: 0, easing: 'easeInOutQuad', duration: 500 }
    ],
    opacity: [
      { value: 1, easing: 'easeOutSine', duration: 250 },
      { value: 0.5, easing: 'easeInOutQuad', duration: 500 }
    ],
    delay: anime.stagger(100, {
      grid: [grid.value[0].length, grid.value.length],
      from: Number((currentTarget as HTMLElement).dataset.index!)
    })
  })
}
</script>

<template>
  <div class="grid w-fit" :style="{ gridTemplateColumns: `repeat(7, 1fr)` }">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex">
      <publisher-dot
        v-for="value in row"
        :key="value"
        :index="value"
        @click-handler="dotMouseOverHandler"
      ></publisher-dot>
    </div>
  </div>
</template>
