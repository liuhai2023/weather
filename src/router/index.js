import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";
import { getObj } from "./config";

console.log(await getObj())
const obj = await getObj()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/weather/:state/:city",
      name: "cityView",
      component: CityView,
      meta: {
        title: "Weather",
      },
    },
  ],
});
obj.forEach(item=>{
  router.addRoute(item)
})
// router.removeRoute('aaa')
console.log(router.getRoutes())

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state
      ? `${to.params.city}, ${to.params.state}`
      : to.meta.title
  } | The Local Weather`;
  next();
});

export default router;
