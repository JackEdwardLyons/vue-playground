import axios from 'axios'
import { filters } from './filters'

export const actions = {
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
  },
  sortByAtoZ ({ commit }, payload) {
    commit('SORT_CITIES_A_TO_Z', payload)
  },
  sortByRank ({ commit }, payload) {
    commit('SORT_CITIES_BY_RANK', payload)
  },
  sortBySearch ({ commit }, payload) {
    commit('SORT_CITIES_BY_SEARCH_TERM', payload)
  },
  addFilterToExecutionList ({ commit }, payload) {
    commit('EXECUTE_SELECTED_FILTERS', {
      type: payload.type,
      filter: filters[payload.filter],
      value: payload.value,
      timestamp: payload.timestamp
    })
  }
}
