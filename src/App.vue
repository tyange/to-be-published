<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition as string" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
.fade-slow-enter-active {
  transition: opacity 0.1s ease-out;
}

.fade-slow-leave-active {
  transition: opacity 2s ease-out;
}

.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}

.fade-faster-fade-enter-active,
.fade-faster-fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-faster-fade-enter-from,
.fade-faster-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
