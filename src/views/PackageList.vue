<template>
  <v-container>
    <AppSearchBar />

    <AppTable />
  </v-container>
</template>

<script>
import AppSearchBar from '../components/AppSearchBar.vue'
import AppTable from '../components/AppTable.vue'

export default {
  components: {
    AppSearchBar,
    AppTable
  }
}
</script>

<style>

</style>