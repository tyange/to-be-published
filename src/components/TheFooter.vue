<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="xs:items-end xs:h-full xs:flex xs:justify-center">
    <p class="flex items-center justify-center h-10 gap-1 text-sm">
      <span>&copy;</span>
      <a href="https://github.com/tyange">tyange</a>
      <span>{{ currentYear }}</span>
    </p>
  </footer>
</template>
