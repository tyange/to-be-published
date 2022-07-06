<script setup lang="ts">
import { computed } from "vue";
import { useBooksStore } from "@/stores/books";
import PageButton from "@/components/PageButton.vue";
import { DotsHorizontalIcon } from "@heroicons/vue/solid";

const store = useBooksStore();
const props = defineProps<{
  pageCounts: number;
}>();

const pageNums = computed(() => {
  const pageNumArray = Array.from({ length: props.pageCounts }, (value, index) => index + 1);

  if (store.currentPageNo < 5) {
    return pageNumArray.slice(0, 5);
  } else if (store.currentPageNo >= props.pageCounts - 3) {
    return pageNumArray.slice(props.pageCounts - 5, props.pageCounts);
  }

  return pageNumArray.slice(store.currentPageNo - 3, store.currentPageNo + 2);
});
</script>
<template>
  <div class="text-gray-500 flex items-center mb-7">
    <template v-if="store.currentPageNo > 4">
      <page-button :page-num="1" />
      <span class="mx-2">
        <DotsHorizontalIcon class="w-5 h-5" />
      </span>
    </template>
    <div class="flex gap-2">
      <PageButton v-bind:key="pageNum" v-for="pageNum in pageNums" :page-num="pageNum" />
    </div>
    <template v-if="store.currentPageNo < pageCounts - 3">
      <span class="mx-2">
        <DotsHorizontalIcon class="w-5 h-5" />
      </span>
      <PageButton :page-num="pageCounts" />
    </template>
  </div>
</template>