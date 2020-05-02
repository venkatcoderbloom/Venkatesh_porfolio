import Vue from 'vue';
import VueParticles from 'vue-particles';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';


Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
