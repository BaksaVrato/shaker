<template>
  <div
    class="w-full p-3 rounded-xl bg-gradient-to-br from-white to-default-100 mt-4"
  >
    <h2>Cocktail name {{ props.name }}</h2>
    <p>Cocktail ingredients {{ props.ingredients }}</p>
    <p>Cocktail description {{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  ingredients: Array,
  description: String,
});
</script>
