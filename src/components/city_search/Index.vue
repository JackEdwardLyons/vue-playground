<template>
    <section class="">

      <div class="">
        <h1>City Search App</h1>
        <p>{{ cityCount }} Cities available</p>
        <hr>
        <AlphabetIndex />
      </div>

      <hr>

      <div class="">
        <FilterOptions />
      </div>

      <div class="">
        <CityList />
      </div>

    </section>
</template>

<script>
/**
 * TODO:
 * - Sort by A - Z , Filter by Name , Rank , Population ( use buttons that allow multi filter options )
 * TODO:
 * - Add cool animations to items that get filtered/sorted
 * TODO:
 * - Lazy load 50 at a time ? load more on scroll ....
*/

import { get, sync } from 'vuex-pathify'
import { rangeSlider } from '../../mixins/rangeSlider.js'
import FilterOptions from './FilterOptions'
import AlphabetIndex from './AlphabetIndex'
import CityList from './CityList'

export default {
  mixins: [ rangeSlider ],
  components: {
    FilterOptions,
    AlphabetIndex,
    // Loading,
    CityList
  },
  data () {
    return {
      sliderValue: [0, 500]
    }
  },
  computed: {
    cities: get('citiesModule/cities'),
    filteredCities: sync('citiesModule/filteredCities'),
    loadingComplete: sync('citiesModule/loadingComplete'),
    cityCount () {
      return this.filteredCities.length
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
