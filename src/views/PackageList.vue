<template>
  <v-container>
    <AppSearchBar @search="onSearch" />

    <AppTable :items="allPackages" />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppSearchBar from '../components/AppSearchBar.vue'
import AppTable from '../components/AppTable.vue'

export default {
  components: {
    AppSearchBar,
    AppTable
  },
  methods: {
    onSearch(searchString) {
      this.fetchPackages(searchString)
    },
    ...mapActions(['fetchPackages'])
  },
  computed: mapGetters(['allPackages'])
}
</script>

<style>

</style>