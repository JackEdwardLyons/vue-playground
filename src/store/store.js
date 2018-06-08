import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'
Vue.use(Vuex)

const state = {
  welcomeMsg: 'Welcome to my Vue.js Playground'
}

// You don't even need getters, pathify will use the store data directly!
// Though if you want, it can generate them for you with `make.getters(state)`

// Same for mutations and actions. (Uses the SET_* format, but this is configurable.)
const mutations = make.mutations(state)

export default new Vuex.Store({
  // Enable the vuex-pathify plugin.
  plugins: [pathify.plugin],
  state,
  mutations,
  actions: {}
})
