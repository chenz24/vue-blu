import Vue from 'vue';
import VueRouter from 'vue-router';
import Blu from '../src';

import App from './App';
import routes from './router.conf';

import DemoBox from './components/DemoBox';
import Icons from './components/Icons';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});

Vue.use(Blu, { prefix: 'blu' });
Vue.component('demo-box', DemoBox);
Vue.component('icons', Icons);

new Vue({// eslint-disable-line
  router,
  render: h => h(App),
}).$mount('#app');
