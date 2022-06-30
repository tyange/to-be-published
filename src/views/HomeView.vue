<script setup lang="ts">
import BookList from "../components/BookList.vue";
import BookForm from "@/components/BookForm.vue";
</script>

<template>
  <main class="w-full flex justify-center items-center">
    <div>
      <BookForm />
      <BookList />
    </div>
  </main>
</template>
