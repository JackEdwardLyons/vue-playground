import { make } from 'vuex-pathify'
import { state } from './state'

// TODO: Create Filter Util Function to just call ONE main filter func.
export const mutations = {
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
  },

  SORT_CITIES_A_TO_Z (state, payload) {
    state.filters.sortByAtoZ = payload
    return (!payload)
      ? state.filteredCities.sort((a, b) => b.city.toLowerCase() < a.city.toLowerCase())
      : state.filteredCities.sort((a, b) => b.city.toLowerCase() > a.city.toLowerCase())
  },

  SORT_CITIES_BY_RANK (state, payload) {
    state.filters.sortByRank = payload
    let [ low, high ] = payload
    const filter = state.cities.filter((city) => {
      return city.rank >= low && city.rank <= high
    })
    state.filteredCities = filter
  },

  SORT_CITIES_BY_SEARCH_TERM (state, payload) {
    state.filters.searchTerm = payload
    const filter = state.cities.filter(city => {
      return city.city.toLowerCase().includes(payload)
    })
    state.filteredCities = filter
  }
}
