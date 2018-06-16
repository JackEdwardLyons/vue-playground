<template>
  <div>
    <Loading v-if="!loadingComplete" />
    <ul class="box-list" v-else>
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
    <p class="bold" v-if="!cities.length && loadingComplete">No results available :(</p>
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

import { sync } from 'vuex-pathify'
import Loading from '@/components/utils/Loading'
export default {
  components: {
    Loading
  },
  computed: {
    cities: sync('citiesModule/filteredCities'),
    loadingComplete: sync('citiesModule/loadingComplete')
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
.stats-card {
  text-align: left;
}
.basic-list {
  list-style-type: none;
  padding: 0;
}
</style>
