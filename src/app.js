import "./scss/app.scss";
import App from "./App.vue";

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./js/config/routes";
import store from "./js/store/store";
import VueSilentbox from "vue-silentbox";

Vue.config.productionTip = false;

Vue.use(VueRouter);

// Global components
Vue.use(VueSilentbox);

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
  router,
});
