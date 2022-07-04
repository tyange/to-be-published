<script setup lang="ts">
import IntroHeader from "@/components/IntroHeader.vue";
import BookList from "../components/BookList.vue";
import BookForm from "@/components/BookForm.vue";
</script>

<template>
  <header class="w-full flex justify-center items-center h-44">
    <IntroHeader/>
  </header>
  <main class="w-full flex justify-center items-center">
    <div class="w-1/2 flex flex-col items-center gap-10">
      <BookForm />
      <BookList />
    </div>
  </main>
</template>
