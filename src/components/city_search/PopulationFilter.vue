<template>
  <div>
    <ul class="population-size-list">
      <li class="population-size-list--item" 
          v-for="(population, index) in populationOptions"
          :key="index">
        {{ numberWithCommas(population.size) }}
      </li>
    </ul>
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
.population-size-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  &--item {
    cursor: pointer;
    font-size: 10px;
    border: 1px solid #ccc;
    background: #fff;
    padding: 5px;
    margin: 5px;
    transition: .3s ease;
    &:hover {
      background: #3498db;
      color: #fff;
    }
  }
}

</style>
