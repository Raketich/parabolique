import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "main" },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/tracks",
    name: "Tracks",
    meta: { layout: "main" },
    component: () => import("@/views/mainViews/Tracks/TracksList.vue")
  },
  {
    path: "/drivers",
    name: "Drivers",
    meta: { layout: "main" },
    component: () => import("@/views/mainViews/Drivers/DriversList.vue")
  },
  {
    path: "/teams",
    name: "Teams",
    meta: { layout: "main" },
    component: () => import("@/views/mainViews/Teams/TeamsList.vue")
  },
  {
    path: "/teams/:teamname",
    name: "TeamView",
    meta: { layout: "team" },
    component: () => import("@/views/mainViews/Teams/TeamView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;