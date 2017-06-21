import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import KeenUI from 'keen-ui';

Vue.use(KeenUI);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',

});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
