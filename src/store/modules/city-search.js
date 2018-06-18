/**
 * Pathify module example
 *
 * Namespaced module, with different property nesting
 */
import axios from 'axios'
import { make } from 'vuex-pathify'

const state = {
  cities: [],
  filteredCities: [],
  filters: {
    byLetter: '',
    byPopulationSize: ''
  },
  loadingComplete: false
}

const getters = {
  ...make.getters(state)
}

// TODO: Create Filter Util Function to just call ONE main filter func.
const mutations = {
  ...make.mutations(state),
  SET_FILTER_BY_LETTER (state, payload) {
    state.filters.byLetter = payload
    const filter = state.cities.filter((city) => {
      return city.city[0].toLowerCase() === payload.toLowerCase()
    })
    state.filteredCities = filter
  },

  SET_FILTER_BY_POPULATION (state, payload) {
    state.filters.byPopulationSize = payload
    const filter = state.cities.filter((city) => {
      return city.population >= payload
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
  setFilterByLetter ({ commit }, letter) {
    commit('SET_FILTER_BY_LETTER', letter)
  },
  setfilterByPopulation ({ commit }, population) {
    commit('SET_FILTER_BY_POPULATION', population)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
