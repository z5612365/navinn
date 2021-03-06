import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/booking",
    name: "Booking",
    component: () => import("../views/Booking.vue"),
  },
  {
    path: "/bookingdetail/:roomId",
    name: "BookingDetail",
    component: () => import("../views/BookingDetail.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
  {
    path: "/instruction",
    name: "Instruction",
    component: () => import("../views/Instruction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
