//3.0是直接使用createApp，接收vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//3.0 是直接使用createApp 挂载根组件 APP
const  app = createApp(App)
//3.0 直接使用 use 然后再链式注入 store 和 router
app.use(store).use(router).mount("#app");
