<script setup lang="ts">
import BookList from "../components/BookList.vue";
import BookForm from "@/components/BookForm.vue";
</script>

<template>
  <main class="w-full flex justify-center items-center">
    <div class="w-1/2 flex flex-col items-center gap-10 pt-10">
      <BookForm />
      <BookList />
    </div>
  </main>
</template>
