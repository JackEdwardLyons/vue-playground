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
    const cities = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    axios.get(cities).then(res => {
      commit('SET_CITIES', res.data)
    }).catch(e => console.log(e))
  },
  loadCityImag ({ commit }) {
    // load a city image if one exists in the API,
    // unfortunately not every city image is available with the API below :()
    // const cityImages = `https://api.teleport.org/api/urban_areas/`
    // let cityLinks = res.data.map(link => `${cityImages}slug:${link.city.toLowerCase().replace(' ', '-')}/images`)
    // return axios.all(cityLinks.map(l => axios.get(l)))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
