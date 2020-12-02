import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/common.less";
import "@/assets/css/rewrite.less";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as api from "./services/request";

Vue.use(ElementUI);
Vue.prototype.api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
