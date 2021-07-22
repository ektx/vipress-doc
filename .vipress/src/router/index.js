// ‼️ 注意 此文件自动创建，请务手动修改内容
// 创建时间: Tue Jul 20 2021 19:51:33 GMT+0800 (中国标准时间)
import { createRouter, createWebHistory } from "vue-router";

import Home from "../../md-pages/README/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "_home_",
      path: "/",
      component: Home,
    },
    {
      path: "/docs/build",
      name: "view-docs-build",
      component: () => import("../../md-pages/docs/build/index.vue"),
    },
    {
      path: "/docs/doc",
      name: "view-docs-doc",
      component: () => import("../../md-pages/docs/doc/index.vue"),
    },
    {
      path: "/docs/expand",
      name: "view-docs-expand",
      component: () => import("../../md-pages/docs/expand/index.vue"),
    },
    {
      path: "/docs/install",
      name: "view-docs-install",
      component: () => import("../../md-pages/docs/install/index.vue"),
    },
    {
      path: "/docs/readme",
      name: "view-docs-readme",
      component: () => import("../../md-pages/docs/readme/index.vue"),
    },
    {
      path: "/docs/setting",
      name: "view-docs-setting",
      component: () => import("../../md-pages/docs/setting/index.vue"),
    },
    {
      path: "/README",
      name: "view-README",
      component: () => import("../../md-pages/README/index.vue"),
    },
  ],
});
