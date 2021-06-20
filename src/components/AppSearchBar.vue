<template>
  <v-text-field
    label="Search"
    prepend-icon="mdi-magnify"
    hide-details="auto"
    v-model.trim="searchString"
    maxlength="64"
    clearable
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    searchString: {
      get() {
        return this.$store.getters.searchString
      },
      set(searchString) {
        this.search(searchString )
      }
    }
  },
  methods: {
    ...mapActions(['search'])
  }
}
</script>

<style>

</style>