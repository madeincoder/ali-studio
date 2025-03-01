<template>
  <router-link :to="{ name: 'landing' }" class="logo">
    <img :src="logo" class="h-16" alt="WebAi Logo" />
  </router-link>
</template>

<script setup lang="ts">
import logo from "@/assets/images/ali-studio.png";
</script>
