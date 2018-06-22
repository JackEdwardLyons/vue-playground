/**
 * Pathify module example
 *
 * Namespaced module, with different property nesting
 */
import { make } from 'vuex-pathify'
import { actions } from './city-search/actions.js'
import { mutations } from './city-search/mutations.js'
import { state } from './city-search/state.js'

const getters = {
  ...make.getters(state)
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
