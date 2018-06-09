import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'
import pathifyModule from './modules/pathify-module'
import citiesModule from './modules/city-search'

Vue.use(Vuex)

const state = {
  welcomeMsg: 'Welcome to my Vue Playground'
}

const mutations = make.mutations(state)

export default new Vuex.Store({
  // Enable the vuex-pathify plugin.
  plugins: [pathify.plugin],
  state,
  mutations,
  modules: {
    pathifyModule,
    citiesModule
  }
})
