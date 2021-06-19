<template>
  <v-container>
    <AppSearchBar />

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

<style>

</style>