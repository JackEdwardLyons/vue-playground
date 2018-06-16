<template>
    <ul class="flex alphabet-index basic-list">
        <li
          ref="letter"
          v-for ="(letter, index) in alphabet"
          :key="letter"
          @click="filterByLetter(letter, index)"
        >
        {{ letter }}
        </li>
    </ul>
</template>

<script>
export default {
  computed: {
    alphabet () {
      return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    }
  },
  methods: {
    filterByLetter (letter, index) {
      this.highlightLetter(index)
      this.$store.dispatch('citiesModule/setFilterByLetter', letter)
    },
    highlightLetter (index) {
      const availableLetters = this.$refs.letter
      availableLetters.forEach((l) => l.classList.remove('clicked-letter'))
      availableLetters[index].classList.add('clicked-letter')
    }
  }
}
</script>
<style lang="scss" scoped>
.alphabet-index {
  li {
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(2);
    }
  }
}

.clicked-letter {
  transform: scale(2);
}
</style>
