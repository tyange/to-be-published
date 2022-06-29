<script setup lang="ts">
import { defineProps } from "vue";

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
    <span>{{ title }}</span>
    <span>{{ author }}</span>
    <span>{{ publisher }}</span>
    <span>{{ pre_price }}</span>
    <span>{{ pre_date }}</span>
    <span>{{ isbn }}</span>
  </div>
</template>