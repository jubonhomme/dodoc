import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import axios from "axios";
const instance = axios.create({
  baseURL: window.location.origin + "/api",
  // headers: {
  //   Origin: window.location.origin,
  // },
});
Vue.prototype.$http = instance;

new Vue({
  router,
  render: (h) => h(App),
  data: {
    url_to_api: window.location.origin + "/api2",
  },
}).$mount("#app");
