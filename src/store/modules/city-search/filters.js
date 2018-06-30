export const filters = {
  filterByLetter (state, payload) {
    return state.cities.filter((city) => {
      return city.city[0].toLowerCase() === payload.toLowerCase()
    })
  },
  filterByPopulationLessThan (state, payload) {
    return state.cities.filter((city) => {
      return city.population <= payload
    })
  },
  filterByPopulationGreaterThan (state, payload) {
    return state.cities.filter((city) => {
      return city.population >= payload
    })
  },
  filterCitiesByRank (state, payload) {
    let [ low, high ] = payload
    return state.cities.filter((city) => {
      return city.rank >= low && city.rank <= high
    })
  },
  filterCitiesByQuery (state, payload) {
    return state.cities.filter(city => {
      return city.city.toLowerCase().includes(payload)
    })
  }
}

export const sorters = {
  sortFromAtoZ (state, payload) {
    return (!payload)
      ? state.filteredCities.sort((a, b) => b.city.toLowerCase() < a.city.toLowerCase())
      : state.filteredCities.sort((a, b) => b.city.toLowerCase() > a.city.toLowerCase())
  }
}
