<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="10"
  >
    <template v-slot:top>
      <AppDialog />
    </template>

    <template v-slot:item.name="{ item }">
      <v-chip
        color="blue"
        dark
      >
        <a class="npm-link" :href="item.links.repository" target="_blank">{{ item.name }}</a>
      </v-chip>
    </template>

    <template v-slot:item.view="{ item }">
      <v-icon
        medium
        class="mr-2"
        @click="$emit('viewItem', item.id)"
      >
        mdi-eye
      </v-icon>
    </template>

  </v-data-table>
</template>

<script>
import AppDialog from './AppDialog.vue'

export default {
  components: {
    AppDialog,
  },
  props: {
    items: {
      required: true,
      type: Array,
    }
  },
  data() {
    return {
      headers: [ 
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description', width: '40%' },
        { text: 'Version', value: 'version' },
        { text: 'View', value: 'view', sortable: false },
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