import Vue from 'vue'
import VueRouter from 'vue-router';

import store from './store'

import App from './App.vue'
import Campaign from './containers/Campaign/Campaign';
import Campaigns from './containers/Campaigns/Campaigns';
import Login from './containers/Login/Login';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/campaigns', component: Campaigns },
  { path: '/campaigns/:campaignName', name:"campaignName", component: Campaign }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');