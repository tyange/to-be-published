<script setup lang="ts">
import { ref } from 'vue'

import anime from 'animejs/lib/anime.es.js'

import PublisherDot from './PublisherDot.vue'

import { publishersData } from '@/data/books'

const gridItem = ref(publishersData)

const dotClickHandler = (e: Event) => {
  const currentTarget = e.target

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
      { value: 0.9, easing: 'easeOutSine', duration: 250 },
      { value: 1, easing: 'easeInOutQuad', duration: 500 }
    ],
    delay: anime.stagger(100, {
      grid: [gridItem.value.length, Math.ceil(gridItem.value.length / 7)],
      from: Number((currentTarget as HTMLElement).dataset.index!)
    })
  })
}
</script>

<template>
  <div class="grid items-center grid-cols-6 grid-rows-4 w-fit">
    <publisher-dot
      v-for="(item, index) in gridItem"
      :key="item.publisherName"
      :index="index"
      :item="item"
      @click-handler="dotClickHandler"
    >
    </publisher-dot>
  </div>
</template>
