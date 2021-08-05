import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./routes"

const scrollBehavior = function (to, from, savedPosition) {
  if (to.hash) {
    return { el: to.hash }
  }
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 }
  }
}

export default createRouter({
    history: createWebHistory(),
    scrollBehavior,
    routes
})
