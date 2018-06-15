<template>
    <section>
        <h1>City Search App</h1>
        <hr>
        <ul class="flex alphabet-index basic-list">
          <li v-for ="letter in alphabet" :key="letter">
            {{ letter }}
          </li>
        </ul>
        <hr>
        <div class="filter-options">
          <vue-slider v-model="sliderValue" :max="1000" v-bind="options"></vue-slider>
          Filter options to go here
          1. sort by population <br>
          2. sort by rank <br>
          3. name Search <br>
          4. sliding scale ( population / rank ) -- if 'filter by pop is selected, then change to population slider' <br>
          5. slider needs to be dynamic based on what cities are available.

        </div>
        <ul class="box-list">
          <li v-for="city in cities" :key="city.rank">
            {{ city.city }}
            <hr>
            <div class="stats-card">
              <p>Rank: {{ city.rank }}</p>
              <p>State: {{ city.state }}</p>
              <p>Population: {{ numberWithCommas(city.population) }}</p>
            </div>
          </li>
        </ul>
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

import { get } from 'vuex-pathify'
import { rangeSlider } from '../../mixins/rangeSlider.js'

export default {
  mixins: [ rangeSlider ],
  data () {
    return {
      sliderValue: [0, 500]
    }
  },
  computed: {
    cities: get('citiesModule/cities'),
    alphabet () {
      return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    }
  },
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  async mounted () {
    await this.$store.dispatch('citiesModule/loadCities')
  }
}
</script>
<style lang="scss" scoped>
hr {
  width: 50%;
  margin: 1em auto;
  border: 1px solid #efefef;
}
.stats-card {
  text-align: left;
}
.alphabet-index {
  font-weight: bold;
}
.basic-list {
  list-style-type: none;
  padding: 0;
}
</style>
