<template>
    <div class="filter-options flex">
        <div class="col">
          <h3>Rank</h3>
          <vue-slider v-model="sliderValue" :max="1000" v-bind="options"></vue-slider>
        </div>
        <div class="col">
          <h3>Population</h3>
          <PopulationFilter />
        </div>
        <div class="col">
          <h3>Name</h3>
          <CitySearch />
        </div>
    </div>
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

import { rangeSlider } from '../../mixins/rangeSlider.js'
import PopulationFilter from './PopulationFilter'
import CitySearch from './CitySearch'

export default {
  mixins: [ rangeSlider ],
  components: {
    PopulationFilter,
    CitySearch
  },
  data () {
    return {
      sliderValue: [0, 500]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
