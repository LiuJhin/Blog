<script setup lang="ts">
import { RouterLink } from "vue-router";
import logodark from "/images/logos/logo.png";
</script>
<template>
  <div class="logo">
    <NuxtLink to="/">
      <img :src="logolight" alt="home" />
    </NuxtLink>
  </div>
</template>
