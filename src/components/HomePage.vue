<template>
  <div class="hello">
    <h1>{{ welcomeMsg }}</h1>
    <p>
      This is my Vue.js playground. <br>
      It's a way for me to further develop my Vue skills and share my code as I go.
    </p>
    <h3>Here's what I've been working on:</h3>
    <ul class="box-list">
      <li><router-link to="/pathify">Pathify</router-link></li>
      <li><router-link to="/city-search">USA Cities</router-link></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  computed: {
    // The sync helper creates two-way bindings for store data and mutations.
    welcomeMsg: sync('welcomeMsg')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
