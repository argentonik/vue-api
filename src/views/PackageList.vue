<template>
  <v-container>
    <AppSearchBar />

    <AppTable :items="allPackages" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import AppSearchBar from '../components/AppSearchBar.vue'
import AppTable from '../components/AppTable.vue'

export default {
  components: {
    AppSearchBar,
    AppTable
  },
  computed: mapGetters(['allPackages'])
}
</script>

<style>

</style>