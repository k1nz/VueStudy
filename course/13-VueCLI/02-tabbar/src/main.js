import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./icons/index"
import SvgIcon from "@/components/SvgIcon" // svg component

// // * icon index.js
// // * Start
// import SvgIcon from "@/components/SvgIcon" // svg component

// // register globally
// // createApp(App).component("svg-icon", SvgIcon)

// const req = require.context("./icons/svg", true, /\.svg$/)
// const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// requireAll(req)

// * End

createApp(App)
  .use(router)
  //
  .component("svg-icon", SvgIcon)
  .mount("#app")
