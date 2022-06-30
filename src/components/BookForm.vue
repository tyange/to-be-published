<script setup lang="ts">
import { ref } from "vue";

const enteredText = ref("");
</script>
<template>
  <form>
    <input type="text" v-model="enteredText" placeholder="testing text">
  </form>
</template>