<template>
    <section>
        <h1>City Search App</h1>
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
import { get } from 'vuex-pathify'

export default {
  computed: {
    cities: get('citiesModule/cities')
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
<style scoped>
hr {
  width: 50%;
  margin: 1em auto;
  border: 1px solid #efefef;
}
.stats-card {
  text-align: left;
}
</style>
