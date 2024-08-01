<template>
  <div class="mb-8">
    <div class="flex mb-3 flex-wrap">
      <div v-for="f in flterComponents" :key="f" class="mr-3">
        <FilterComponent :name="f" @click="removeFilterComponent(f)" />
      </div>
    </div>
    <div class="flex flex-row">
      <input
        type="text"
        placeholder="What ingredients do you have?"
        class="w-full p-4 rounded-3xl bg-gradient-to-br from-white to-default-100 text-default-400 shadow-2xl outline-none"
        v-model="searchResult"
        @input="filterIngredients"
      />
      <button
        class="w-24 ml-3 p-4 rounded-3xl bg-gradient-to-r from-maroon-200 to-maroon-300 text-default-100 font-semibold shadow-2xl"
        @click="searchIdea"
      >
        Search
      </button>
    </div>
    <div
      class="absolute w-3/5 max-w-lg bg-gradient-to-r from-white to-default-100 rounded-xl mt-2"
    >
      <div
        class="flex flex-col"
        v-for="i in filteredIngredients.slice(0, 5)"
        :key="i"
      >
        <IngredientSearchCard :name="i" @click="addFilterComponent(i)" />
      </div>
    </div>
    <div
      class="flex flex-col gap-4"
      v-for="i in filteredCocktails"
      :key="filteredCocktails.indexOf(i)"
    >
      <CocktailCard
        :name="i.name"
        :ingredients="i.ingredients"
        :description="i.instructions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IngredientSearchCard from "./ingredient-search-card.vue";
import FilterComponent from "./ingredient-filter-component.vue";
import CocktailCard from "./cocktail-card.vue";
import ingredients from "../assets/ingredients";
import cocktails from "../assets/cocktails";

const searchResult = ref<string>("");
const filteredIngredients = ref<string[]>([]);
const flterComponents = ref<string[]>([]);
const filteredCocktails = ref<object[]>([]);

const filterIngredients = () => {
  filteredIngredients.value = [];
  ingredients.forEach((i) => {
    if (i.toLowerCase().includes(searchResult.value.toLowerCase())) {
      if (i[0] === searchResult.value[0]) {
        filteredIngredients.value.unshift(i);
      } else {
        filteredIngredients.value.push(i);
      }
    }
  });
  if (searchResult.value === "") {
    filteredIngredients.value = [];
  }
};

const addFilterComponent = (name: string) => {
  if (!flterComponents.value.includes(name)) {
    flterComponents.value.push(name);
    searchResult.value = "";
    filteredIngredients.value = [];
  }
};

const removeFilterComponent = (name: string) => {
  const index = flterComponents.value.indexOf(name);
  if (index > -1) {
    flterComponents.value.splice(index, 1);
  }
};

const searchIdea = async () => {
  console.log("searching for ideas");

  filteredCocktails.value = [];

  filteredCocktails.value = cocktails.filter((cocktail) => {
    return cocktail.ingredients.every((ingredient) =>
      flterComponents.value.includes(ingredient)
    );
  });

  // Log the result or a message if no cocktails were found
  if (filteredCocktails.value.length === 0) {
    console.log("Cocktails not found");
  } else {
    console.log("Found cocktails:", filteredCocktails.value);
  }
};
</script>
