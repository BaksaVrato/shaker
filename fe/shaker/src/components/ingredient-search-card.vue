<template>
  <div
    class="w-full text-sm text-default-400 p-4 font-bold cursor-pointer shadow"
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
