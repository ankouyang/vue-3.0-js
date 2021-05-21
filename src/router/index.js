//3.0 使用 createRouter创建router实例,调用createWebHashHistory函数为hash模式 调用createWebHistory函数为history模式
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
//3.0 使用 createRouter创建router实例
const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory() hash模式  // createWebHistory() history模式
  routes,
});

export default router;
