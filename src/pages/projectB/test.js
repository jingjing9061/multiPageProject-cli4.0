import Vue from "vue";
import App from "./test.vue";
import router from "../../router";
import store from "../../store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#test");
