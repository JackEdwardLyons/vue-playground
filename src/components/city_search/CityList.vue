<template>
    <div>
        <h1>City Search App</h1>
        <pre v-if="cities">
            {{ cities }}
        </pre>
    </div>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  computed: {
    cities: get('citiesModule/cities')
  },
  async mounted () {
    await this.$store.dispatch('citiesModule/loadCities')
  }
}
</script>
