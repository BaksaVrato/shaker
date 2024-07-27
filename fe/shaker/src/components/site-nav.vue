<template>
  <div>
    <nav class="w-full">
      <ul class="flex flex-row p-5 gap-3">
        <router-link
          :to="{ name: 'recipe' }"
          class="w-1/2 text-center p-4 text-xl bg-maroon-300"
          >Recipe</router-link
        >
        <router-link
          :to="{ name: 'idea' }"
          class="w-1/2 text-center p-4 text-xl"
          >Idea</router-link
        >
      </ul>
    </nav>
  </div>
</template>
