<template>
  <div>
    <SiteNav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import SiteNav from "./components/site-nav.vue";
</script>
