<template>
  <v-container>
    <AppSearchBar class="search-panel" />

    <AppTable 
      :items="allPackages"
      @viewItem="setCurrentPackageId"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppSearchBar from '../components/AppSearchBar.vue'
import AppTable from '../components/AppTable.vue'

export default {
  components: {
    AppSearchBar,
    AppTable
  },
  computed: mapGetters(['allPackages']),
  methods: mapActions(['setCurrentPackageId'])
}
</script>

<style scoped>
  .search-panel {
    margin-bottom: 1rem;
  }
</style>