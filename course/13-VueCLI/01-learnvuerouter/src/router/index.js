// * // 配置路由相关模块
// import Router from "vue-router";
// import Vue from "vue";

// * // 1.通过Vue.use(插件)，安装插件
// Vue.use(Router);
// * // 2.创建VueRouter对象
// const routes = []
// const router = new Router({
//   routes
// })
// * // 3.将router对象传入到Vue实例
// export default router

// * // 4.在main.js中挂载router

import Vue from "vue";
import Router from "vue-router";

// import About from "../components/About.vue";
import Home from "../components/Home.vue";
// import User from "../components/User.vue";

// 使用懒加载
// const Home = () => import("../components/Home.vue");
const HomeNews = () => import("../components/HomeNews.vue");
const HomeMessage = () => import("../components/HomeMessage.vue");

const User = () => import("../components/User.vue");
const About = () => import("../components/About.vue");
const Profile = () => import("../components/Profile.vue");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
      // redirect重定向，默认打开home页面
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        title: "首页"
      },
      children: [
        // 重定向，当打开home时，自动打开news页面
        // ! 由于需要保留子路由的路径，故不需要下面的代码
        // {
        //   path: "",
        //   redirect: "news"
        // },
        {
          path: "news",
          name: "HomeNews",
          component: HomeNews
        },
        {
          path: "message",
          name: "HomeMessage",
          component: HomeMessage
        }
      ]
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        title: "关于"
      },
      // * 路由的独享守卫
      beforeEnter: (to, from, next) => {
        // console.log("about beforeEach");
        next();
      }
    },
    {
      // 这里的:userId的userId变量是可以自定义的，目的是接受父组件router-link传过来的userId，可以在子组件中通过this.$route.params.userId取得父组件中的数据
      path: "/user/:userId",
      name: "User",
      component: User,
      meta: {
        title: "用户"
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        title: "个人档案"
      }
    }
  ],
  mode: "history"
});

// beforeEach 前置守卫(guard)
// 从from跳转到to页面
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  // console.log(to);
  // console.log("beforeEach");
  next();
});

// afterEach 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log("afterEach");
});

export default router;
