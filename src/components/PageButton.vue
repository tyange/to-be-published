<script setup lang="ts">
import { useBooksStore } from "@/stores/books";
import { computed } from "vue";

const store = useBooksStore();
const props = defineProps<{
  pageNum: number;
}>();

const fetchBooksByPageNum = (e: Event) => {
  e.preventDefault();

  store.fetchBooksByPageNo(props.pageNum);
};

const isHighlight = computed(() => {
  const currentPageNo = store.currentPageNo;

  if (props.pageNum === currentPageNo) return true;

  return false;
});
</script>
<template>
  <button v-on:click="fetchBooksByPageNum" class="border-2 px-2 shadow-sm rounded-lg"
          v-bind:class="{'font-semibold bg-neutral-300': isHighlight}">
    {{ props.pageNum }}
  </button>
</template>