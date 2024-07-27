import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import IdeaView from "../views/IdeaView.vue";
import RecipeView from "../views/RecipeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "idea",
    component: IdeaView,
  },
  {
    path: "/recipe",
    name: "recipe",
    component: RecipeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
