<template>
    <div>
        <input type="text" v-model="query">
    </div>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  watch: {
    query (value) {
      this.$store.dispatch('citiesModule/addFilterToExecutionList', {
        type: 'query',
        filter: 'filterCitiesByQuery',
        value: value,
        timestamp: new Date()
      })
    }
  }
}
</script>

<style>

</style>
