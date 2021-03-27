import { createApp } from "vue"
import App from "../App.vue"
// import router from "../router"

// register globally
createApp(App)
// .use(router)
//
// .mount("#app")

const req = require.context("./svg", true, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
