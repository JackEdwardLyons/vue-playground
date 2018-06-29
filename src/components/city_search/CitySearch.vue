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
    query (val) {
      this.$store.dispatch('citiesModule/sortBySearch', val)
    }
  }
}
</script>

<style>

</style>
