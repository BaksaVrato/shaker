<template>
  <div class="min-h-screen bg-gradient-to-t from-maroon-400 to-maroon-500">
    <SiteNav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import SiteNav from "./components/site-nav.vue";
</script>
