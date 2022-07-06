<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="flex justify-center">
    <p class="flex items-center justify-center text-sm h-10 gap-1">
      <span>&copy;</span>
      <a href="https://github.com/tyange">tyange</a>
      <span>{{currentYear}}</span>
    </p>
  </footer>
</template>