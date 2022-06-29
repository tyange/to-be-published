<script setup lang="ts">
const props = defineProps<{
  title: string,
  author: string,
  publisher: string,
  pre_price: string,
  pre_date: string,
  isbn: string
}>();
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ author }}</p>
    <p>
      <span>{{ isbn }}</span>
      <span>{{ publisher }}</span>
    </p>
    <p>
      <span>
        예상 가격:
      </span>
      <span>
        {{ pre_price }}원
      </span>
    </p>
    <p>
      <span>
        출간예정일:
      </span>
      <span>
        {{ pre_date }}
      </span>
    </p>
  </div>
</template>