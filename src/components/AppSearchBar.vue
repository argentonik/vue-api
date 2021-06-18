<template>
  <v-text-field
    label="Search"
    prepend-icon="mdi-magnify"
    hide-details="auto"
    @input="onSearch"
    clearable
  ></v-text-field>
</template>

<script>
export default {
  methods: {
    onSearch(searchString) {
      searchString = searchString ? searchString.trim() : searchString
      if (searchString) {
        this.$emit('search', searchString)
      }
    }
  }
}
</script>

<style>

</style>