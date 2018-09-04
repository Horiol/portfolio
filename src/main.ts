import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

const VueAnalytics = require('vue-analytics');

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: 'UA-125204258-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd,
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
