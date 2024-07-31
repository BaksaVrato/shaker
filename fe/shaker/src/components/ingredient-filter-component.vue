<template>
  <div
    class="w-full text-xs p-1 bg-gradient-to-r from-default-200 to-default-100 rounded px-2 mt-2"
  >
    <p>{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  name: String,
});
</script>
