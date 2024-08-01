<template>
  <div
    class="w-full p-4 rounded-xl bg-gradient-to-br from-white to-default-100 mt-4"
  >
    <h2 class="text-default-400 font-semibold text-2xl">
      {{ props.name }}
    </h2>
    <p class="text-default-300 text-sm mb-3">
      <i
        ><b>{{ ingredientsString }}</b></i
      >
    </p>
    <p class="text-default-500">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  ingredients: Array,
  description: String,
});

const ingredientsString: string = props.ingredients.join(", ");
</script>
