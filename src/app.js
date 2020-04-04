import './scss/app.scss';
import App from './App.vue';


import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './js/config/routes';
import store from './js/store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
  });
