<template>
  <v-dialog v-model="isShow" max-width="500px" v-if="isShow">
    <v-card>
      <v-card-title class="text-h5">Detail info</v-card-title>
      <v-card-text>
        <p>Name: <span class="text--primary">{{ currentPackage.name }}</span></p>
        <p>Description: <span class="text--primary">{{ currentPackage.description }}</span></p>
        <p>Keywords: 
          <v-chip class="mr-2 mt-1" v-for="keyword in currentPackage.keywords" :key="keyword">
            {{ keyword }}
          </v-chip>
        </p>
        <p>Publisher: <span class="text--primary">{{ currentPackage.publisher.email }}</span></p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    close() {
      this.setCurrentPackageId(null)
    },
    ...mapActions(['setCurrentPackageId'])
  },
  computed: {
    isShow: {
      get() {
        return this.currentPackageId !== null
      },
      set(value) {
        if (!value) {
          this.setCurrentPackageId(null)
        }
      }
    },
    ...mapGetters(['currentPackageId', 'currentPackage'])
  }
}
</script>

<style>

</style>