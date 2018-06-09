import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import CitySearch from './views/CitySearch.vue'
import Pathify from './views/Pathify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/pathify',
      name: 'pathify',
      component: Pathify
    },
    {
      path: '/city-search',
      name: 'city search',
      component: CitySearch
    }
  ]
})
