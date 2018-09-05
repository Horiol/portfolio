import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
const isProd = process.env.NODE_ENV === 'production';

// Google Analytics
const VueAnalytics = require('vue-analytics');
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
