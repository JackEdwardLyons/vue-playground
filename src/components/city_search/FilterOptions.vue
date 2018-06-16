<template>
    <div class="filter-options flex">
        <div class="col">
          <vue-slider v-model="sliderValue" :max="1000" v-bind="options"></vue-slider>
        </div>
        <div class="col">
          <!-- Filter options to go here
          1. sort by population <br>
          2. sort by rank <br>
          3. name Search <br>
          4. sliding scale ( population / rank ) -- if 'filter by pop is selected, then change to population slider' <br>
          5. slider needs to be dynamic based on what cities are available. Interval slider for large populations but not for rank -->
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

export default {
  mixins: [ rangeSlider ],
  data () {
    return {
      sliderValue: [0, 500]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
