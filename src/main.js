import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VuejsDialog from 'vuejs-dialog';
import store from './store'

Vue.use(BootstrapVue)
Vue.use(VuejsDialog);

Vue.config.productionTip = false
console.log("The value of our env is ")
console.log(process.env)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
