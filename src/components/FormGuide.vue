<script setup lang="ts">
import { computed, ref } from 'vue'

const isOpen = ref(false)

const props = defineProps<{
  guideFor: string
}>()

const keywordGuide = '키워드가 없을 경우 전체 검색 결과를 나타냅니다.'
const prePublishGuide = '등록된 출판예정일의 범위를 지정합니다.'
const isEbookGuide = '전자책 옵션을 체크하면 출간 예정 전자책을 검색할 수 있습니다.'

const guideMessage = computed(() => {
  switch (props.guideFor) {
    case 'keyword':
      return keywordGuide
    case 'pre-publish':
      return prePublishGuide
    case 'isEbook':
      return isEbookGuide
    default:
      return '검색 안내.'
  }
})

const guideToggleHandler = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    class="flex items-center gap-2 cursor-pointer"
    v-bind:class="{ inline: isOpen }"
    v-on:click="guideToggleHandler"
  >
    <span
      v-bind:class="{ inline: isOpen, hidden: !isOpen }"
      class="text-xs text-gray-400 md:text-sm"
      >{{ guideMessage }}</span
    >
  </div>
</template>
