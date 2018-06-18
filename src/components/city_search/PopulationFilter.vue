<template>
    <div>
        <select id="population-size">
            <option
                v-for="(population, index) in populationOptions"
                :key="index"
                @click="filterByPopulation(population.size)">
                {{ numberWithCommas(population.size) }}
            </option>
        </select>
    </div>
</template>

<script>
import { numberFunctions } from '../../mixins/numbers.js'

export default {
  mixins: [ numberFunctions ],
  data () {
    return {
      populationOptions: [
        { size: 50000, reference: 'small' },
        { size: 100000, reference: 'medium' },
        { size: 250000, reference: 'mediumLarge' },
        { size: 500000, reference: 'large' },
        { size: 1000000, reference: 'oneMillion' },
        { size: 5000000, reference: 'fiveMillion' },
        { size: 7500000, reference: 'tenMillionPlus' }
      ]
    }
  },
  methods: {
    filterByPopulation (size) {
      this.$store.dispatch('citiesModule/setfilterByPopulation', size)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
