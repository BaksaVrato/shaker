<template>
  <div class="container mx-auto max-w-screen-sm flex justify-center mb-3">
    <nav class="w-full">
      <ul class="flex flex-row p-4 gap-3">
        <router-link
          :to="{ name: 'recipe' }"
          class="w-full text-center p-3 text-xl bg-gradient-to-r from-maroon-200 to-maroon-100 text-default-600 rounded-lg font-semibold shadow-2xl"
          >Recipe</router-link
        >
        <router-link
          :to="{ name: 'idea' }"
          class="w-full text-center p-3 text-xl text-default-100 font-semibold"
          >Idea</router-link
        >
      </ul>
    </nav>
  </div>
</template>
