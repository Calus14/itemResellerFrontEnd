import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VuejsDialog from 'vuejs-dialog';
import AsyncComputed from 'vue-async-computed'
import router from './router';
import store from './store'
import vuetify from './plugins/vuetify';
import VueWorker from 'vue-worker';

Vue.use(BootstrapVue)
Vue.use(VuejsDialog);
Vue.use(AsyncComputed)
Vue.use(VueWorker);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
