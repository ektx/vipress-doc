// ‼️ 注意 此文件自动创建，请务手动修改内容
// 创建时间: Sat Jul 24 2021 18:45:06 GMT+0800 (中国标准时间)
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
      path: "/README",
      name: "view-README",
      component: () => import("../../md-pages/README/index.vue"),
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
      path: "/docs/setting",
      name: "view-docs-setting",
      component: () => import("../../md-pages/docs/setting/index.vue"),
    },
    {
      path: "/docs/test",
      name: "view-docs-test",
      component: () => import("../../md-pages/docs/test/index.vue"),
    },
  ],
});
