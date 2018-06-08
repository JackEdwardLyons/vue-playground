<template>
    <div class="content">
      <h3>Learning to use <a href="https://davestewart.github.io/vuex-pathify/#/setup/install" target="_blank">Vuex-pathify</a></h3>
      <p>Module:</p>
      <div class="flex">
          <div class="col">
            <pre>{{ module }}</pre>

            <p>Result of getter function "substr"</p>
            <pre>{{ getter(value) }}</pre>

            <p>Nested syntax:</p>
            <pre>{{ { sub, nested } }} </pre>

            <p>Array syntax:</p>
            <pre>{{ { value, string } }} </pre>

            <p>Object syntax:</p>
            <pre>{{ { altValue, altString } }} </pre>
          </div>
          <div class="col">
            <p>Sync "value": <input type="number" min="0" :max="module.string.length - 1" v-model.number="value"/></p>
            <p>Sync "object.value": <input v-model="sub"/></p>
            <p>Sync "object.a.b.c": <input v-model="nested"/></p>
          </div>
      </div>
    </div>
</template>

<script>
import { get, sync, commit } from 'vuex-pathify'
export default {
  computed: {
    // single property
    module: get('module'),

    // function getter
    getter: get('module/substr'),

    // nested property syntax
    sub: sync('module/object@value'),
    nested: sync('module/object@a.b.c'),

    // array syntax
    ...sync('module', [
        'value',
        'string'
    ]),

    // object syntax
    ...get('module', {
        altValue: 'value',
        altString: 'string'
    })
  }
}
</script>

<style scoped>

</style>
