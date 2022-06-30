<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string,
  author: string,
  publisher: string,
  pre_price: string,
  pre_date: string,
  isbn: string
}>();

const convertedPrice = computed(() => {
  if (!isNaN(parseInt(props.pre_price))) {
    return `${props.pre_price}원`;
  } else {
    return "미정";
  }
});

const convertedAuthors = computed(() => {
  const splitAuthors = props.author.split(";");

  if (splitAuthors.length > 1) {
    splitAuthors.pop()
    return splitAuthors;
  }

  return null;
});
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p class="flex gap-2">
      <span v-if="convertedAuthors === null">
        {{ author }}
      </span>
      <span v-for="convertedAuthor in convertedAuthors" :key="convertedAuthor">
        {{ convertedAuthor }};
      </span>
    </p>
    <p>
      <span>{{ isbn }}</span>
      <span>{{ publisher }}</span>
    </p>
    <p>
      <span>
        예상 가격:
      </span>
      <span>
        {{ convertedPrice }}
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