import { make } from 'vuex-pathify'
import { state } from './state'
import { filters, sorters } from './filters'

// TODO: Create Filter Util Function to just call ONE main filter func.
export const mutations = {
  ...make.mutations(state),
  SET_FILTER_BY_LETTER (state, payload) {
    state.filters.byLetter = payload
    state.filteredCities = filters.filterByLetter(state, payload)
  },

  SET_FILTER_BY_POPULATION (state, payload) {
    state.filters.byPopulationSize = payload
    state.filteredCities = filters.filterByPopulationLessThan(state, payload)
  },

  SET_LOADING_COMPLETE (state, payload) {
    state.loadingComplete = payload
  },

  SORT_CITIES_A_TO_Z (state, payload) {
    state.filters.sortByAtoZ = payload
    sorters.sortFromAtoZ(state, payload)
  },

  SORT_CITIES_BY_RANK (state, payload) {
    state.filters.sortByRank = payload
    state.filteredCities = filters.filterCitiesByRank(state, payload)
  },

  SORT_CITIES_BY_SEARCH_TERM (state, payload) {
    state.filters.searchTerm = payload
    state.filteredCities = filters.filterCitiesByQuery(state, payload)
  }
}
