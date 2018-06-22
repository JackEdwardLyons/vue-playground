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
        <div class="col">
          <h3>Sort</h3>
          <span class="sort__a-z" @click="toggleAZSort">
            {{ sortAZ }}
            <icon-arrow-down :class="{ 'up': sortZtoA }" />
          </span>
        </div>
    </div>
</template>

<script>
import { rangeSlider } from '../../mixins/rangeSlider.js'
import PopulationFilter from './PopulationFilter'
import CitySearch from './CitySearch'
import IconArrowDown from '../icons/IconArrowDown'

export default {
  mixins: [ rangeSlider ],
  components: {
    PopulationFilter,
    CitySearch,
    IconArrowDown
  },
  data () {
    return {
      sliderValue: [0, 500],
      sortZtoA: false
    }
  },
  computed: {
    sortAZ () {
      return this.sortZtoA ? 'A - Z' : 'Z - A'
    }
  },
  methods: {
    toggleAZSort () {
      this.sortZtoA = !this.sortZtoA
      this.$store.dispatch('citiesModule/sortByAtoZ', this.sortZtoA)
    }
  }
}
</script>
<style lang="scss" scoped>
h3 {
  margin-bottom: 1em;
}
.sort__a-z {
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
}
.up {
  transform: rotate(180deg)
}
</style>
