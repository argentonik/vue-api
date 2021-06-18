<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="10"
  >
    <template v-slot:item.name="{ item }">
      <v-chip
        color="blue"
        dark
      >
        <a class="npm-link" :href="item.links.repository" target="_blank">{{ item.name }}</a>
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      headers: [ 
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description', width: '40%' },
        { text: 'Author', value: 'author.name' },
        { text: 'Version', value: 'version' },
      ]
    }
  }
}
</script>

<style scoped>
  a.npm-link {
    text-decoration: none;
    color: white;
  }
</style>