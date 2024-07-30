<template>
  <div>
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
