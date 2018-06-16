/**
 * Pathify module example
 *
 * Namespaced module, with different property nesting
 */
// import { make } from 'vuex-pathify'
import axios from 'axios'
import { make } from 'vuex-pathify'

const state = {
  cities: [],
  filteredCities: [],
  filters: {
    byLetter: 'N'
  },
  loadingComplete: false
}

const getters = {
  ...make.getters(state)
//   getCities () {
//     return state.cities
//   }
}

const mutations = {
  ...make.mutations(state),
  SET_FILTER_BY_LETTER (state, payload) {
    state.filters.byLetter = payload
  },
  FILTER_CITIES (state, payload) {
    // TODO: Make this function generic
    const filter = state.cities.filter(function (city) {
      return city.city[0].toLowerCase() === payload.toLowerCase()
    })
    state.filteredCities = filter
  },
  SET_LOADING_COMPLETE (state, payload) {
    state.loadingComplete = payload
  }
}

const actions = {
  loadCities ({ commit }) {
    const cities = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    axios.get(cities).then(res => {
      commit('SET_CITIES', res.data)
      commit('SET_FILTERED_CITIES', res.data)
      commit('SET_LOADING_COMPLETE', true)
    }).catch(e => console.log(e))
  },
  // loadCityImag ({ commit }) {
  //   // load a city image if one exists in the API,
  //   // unfortunately not every city image is available with the API below :()
  //   // const cityImages = `https://api.teleport.org/api/urban_areas/`
  //   // let cityLinks = res.data.map(link => `${cityImages}slug:${link.city.toLowerCase().replace(' ', '-')}/images`)
  //   // return axios.all(cityLinks.map(l => axios.get(l)))
  // },
  setFilterByLetter ({ commit }, letter) {
    commit('SET_FILTER_BY_LETTER', letter)
    commit('FILTER_CITIES', letter)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
