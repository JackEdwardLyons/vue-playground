<template>
    <section>

      <article class="">
        <h1>City Search App</h1>
        <p>{{ cityCount }} Cities available</p>
      </article>

      <hr>

      <AlphabetIndex />

      <article @click="removeLetterHighlight">
        <h2>Filter Cities</h2>
        <FilterOptions />
      </article>

      <CityList />

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
    CityList
  },
  data () {
    return {
      sliderValue: [0, 500]
    }
  },
  methods: {
    removeLetterHighlight () {
      const availableLetters = this.$children.map(child => child.$refs.letter)[0]
      availableLetters.forEach(letter => letter.classList.remove('clicked-letter'))
    }
  },
  computed: {
    cities: get('citiesModule/cities'),
    filteredCities: sync('citiesModule/filteredCities'),
    loadingComplete: sync('citiesModule/loadingComplete'),
    cityCount () { return this.filteredCities.length }
  }
}
</script>
<style lang="scss" scoped>
</style>
