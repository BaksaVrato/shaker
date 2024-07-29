<template>
  <div
    class="w-full text-xs p-2 bg-gradient-to-r from-default-200 to-default-100 rounded-xl mt-3"
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
