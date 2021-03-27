import { createRouter, createWebHistory } from "vue-router"
// import Home from "../views/home/Home.vue"
// import Category from "../views/category/Category.vue"
// import Profile from "../views/profile/Profile.vue"
// import Cart from "../views/cart/Cart.vue"

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/cart",
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
