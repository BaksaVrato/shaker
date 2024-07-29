<template>
  <div>
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
      >
        Search
      </button>
    </div>
    <div
      class="flex flex-col mr-24"
      v-for="i in filteredIngredients.slice(0, 5)"
      :key="i"
    >
      <IngredientSearchCard :name="i" @click="addFilterComponent(i)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IngredientSearchCard from "./ingredient-search-card.vue";
import FilterComponent from "./ingredient-filter-component.vue";
import ingredients from "../assets/ingredients";

const searchResult = ref<string>("");
const filteredIngredients = ref<string[]>([]);
const flterComponents = ref<string[]>([]);

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
  }
};

const removeFilterComponent = (name: string) => {
  const index = flterComponents.value.indexOf(name);
  if (index > -1) {
    flterComponents.value.splice(index, 1);
  }
};
</script>
