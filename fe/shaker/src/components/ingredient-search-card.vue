<template>
  <div
    class="w-full text-sm text-default-400 p-4 bg-gradient-to-r from-white to-default-200 rounded-xl mt-3"
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
