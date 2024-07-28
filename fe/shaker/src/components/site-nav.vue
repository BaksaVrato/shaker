<template>
  <div class="w-full shadow-xl mb-8">
    <div class="container mx-auto flex justify-center">
      <nav class="w-full max-w-screen-sm">
        <ul class="flex flex-row p-4 gap-3">
          <router-link
            :to="{ name: 'recipe' }"
            :class="
              isRecipeBtnActive
                ? 'w-full text-center p-3 text-xl bg-gradient-to-r from-maroon-200 to-maroon-100 text-default-600 rounded-lg font-semibold shadow-2xl'
                : 'w-full text-center p-3 text-xl text-default-100 font-semibold'
            "
            @click="toggleBtn('Recipe')"
            >Recipe</router-link
          >
          <router-link
            :to="{ name: 'idea' }"
            :class="
              isIdeaBtnActive
                ? 'w-full text-center p-3 text-xl bg-gradient-to-r from-maroon-200 to-maroon-100 text-default-600 rounded-lg font-semibold shadow-2xl'
                : 'w-full text-center p-3 text-xl text-default-100 font-semibold'
            "
            @click="toggleBtn('Idea')"
            >Idea</router-link
          >
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isIdeaBtnActive = ref(true);
const isRecipeBtnActive = ref(false);

const toggleBtn = (button: string): void => {
  if (button === "Idea") {
    isIdeaBtnActive.value = true;
    isRecipeBtnActive.value = false;
  } else if (button === "Recipe") {
    isIdeaBtnActive.value = false;
    isRecipeBtnActive.value = true;
  }
};
</script>
