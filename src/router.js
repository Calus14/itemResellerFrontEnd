import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import SearchPage from './components/SearchPage.vue'
import SubscriptionsPage from './components/SubscriptionsPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/searchTheInternet',
      name : 'search',
      component : SearchPage
    },
    {
      path: '/subsrcriptions',
      name : 'subsrcriptions',
      component : SubscriptionsPage
    }
  ]
})
