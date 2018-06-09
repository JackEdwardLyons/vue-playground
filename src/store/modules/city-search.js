/**
 * Pathify module example
 *
 * Namespaced module, with different property nesting
 */
// import { make } from 'vuex-pathify'
import axios from 'axios'
import { make } from 'vuex-pathify'

const state = {
  cities: []
}

const getters = {
  ...make.getters(state)
//   getCities () {
//     return state.cities
//   }
}

const mutations = {
  ...make.mutations(state)
//   SET_CITIES (state, payload) {
//     state.cities = payload
//   }
}

const actions = {
  loadCities ({ commit }) {
    const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    axios.get(url)
      .then(res => commit('SET_CITIES', res.data))
      .catch(e => console.log(e))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
