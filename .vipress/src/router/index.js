import { createRouter, createWebHistory } from "vue-router";
import { routes } from './routes'

const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ top: 0 });
        }, 500);
      });
    }
  }

export default createRouter({
    history: createWebHistory(),
    scrollBehavior,
    routes
})