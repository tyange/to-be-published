<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  author: string
  publisher: string
  pre_price: string
  pre_date: string
  isbn: string
}>()

const convertedPrice = computed(() => {
  if (!isNaN(parseInt(props.pre_price))) {
    return props.pre_price
  } else {
    return '미정'
  }
})

const convertedAuthors = computed(() => {
  const splitAuthors = props.author.split(';')

  if (splitAuthors.length > 1) {
    splitAuthors.pop()
    return splitAuthors
  }

  return null
})

const convertedIsbn = computed(() => {
  if (props.isbn.trim().length === 0) {
    return '미정'
  }

  return props.isbn
})

const convertedPreDate = computed(() => {
  return `${props.pre_date.slice(0, 4)}-${props.pre_date.slice(4, 6)}-${props.pre_date.slice(6)}`
})
</script>

<template>
  <div class="w-full">
    <div class="relative p-6">
      <span class="absolute top-0 left-0 text-xs text-gray-300"> 도서명 </span>
      <p class="text-sm md:text-base">
        {{ title }}
      </p>
    </div>
    <div class="relative flex gap-4 p-6">
      <span class="absolute top-0 left-0 text-xs text-gray-300"> 작가 </span>
      <span class="text-sm md:text-base" v-if="convertedAuthors === null">
        {{ author }}
      </span>
      <div v-if="convertedAuthors !== null">
        <span
          class="text-sm break-all md:text-base"
          v-for="(convertedAuthor, index) in convertedAuthors"
          :key="convertedAuthor"
        >
          {{ convertedAuthor }}
          <span v-if="index !== Object.keys(convertedAuthors).length - 1" class="pr-2">,</span>
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-5 sm:flex-row">
      <div class="relative flex gap-2 p-6">
        <span class="absolute top-0 left-0 text-xs text-gray-300"> ISBN </span>
        <span class="text-sm md:text-base">{{ convertedIsbn }}</span>
      </div>
      <div class="relative flex gap-2 p-6">
        <span class="absolute top-0 left-0 text-xs text-gray-300"> 출판사 </span>
        <span class="text-sm md:text-base">{{ publisher }}</span>
      </div>
    </div>
    <div class="flex gap-5">
      <div class="relative flex gap-2 p-6">
        <span class="absolute top-0 left-0 text-xs text-gray-300"> 예정 가격(원) </span>
        <span class="text-sm md:text-base">{{ convertedPrice }}</span>
      </div>
      <div class="relative flex gap-2 p-6">
        <span class="absolute top-0 left-0 text-xs text-gray-300"> 출간예정일 </span>
        <span class="text-sm md:text-base">{{ convertedPreDate }}</span>
      </div>
    </div>
  </div>
</template>
