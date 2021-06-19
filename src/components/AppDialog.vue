<template>
  <v-dialog v-model="isShow" max-width="500px" v-if="isShow">
    <v-card>
      <v-card-title class="text-h5">Detail info</v-card-title>

      <v-card-text v-if="loading">
        <v-container>
          <v-row justify="center">
            <AppSpinner />
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-text v-else>
        <div>Name: <span class="text--primary">{{ currentPackage.name }}</span></div>
        <div>Version: <span class="text--primary">{{ currentPackage.version }}</span></div>
        <div>Description: <span class="text--primary">{{ currentPackage.description }}</span></div>
        <div v-if="currentPackage.keywords">
          Keywords: 
          <v-chip class="mr-2 mt-1" v-for="keyword in currentPackage.keywords.slice(0, 5)" :key="keyword">
            {{ keyword }}
          </v-chip>
        </div>
        <div>Publisher: <span class="text--primary">{{ currentPackage.publisher.email }}</span></div>

        <div v-if="currentPackage.details">
          <div>Current package version usage stats for month: <span class="text--primary">{{ currentPackage.details.stats }}</span></div>
          <div class="details">
            <div v-html="currentPackage.details.badge"></div>
            <div v-html="currentPackage.details.rank"></div>
          </div>
        </div>
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
import AppSpinner from './AppSpinner.vue'

export default {
  components: {
    AppSpinner,
  },
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
    ...mapGetters(['currentPackageId', 'currentPackage', 'loading'])
  }
}
</script>

<style scoped>
  .details {
    margin-top: 1rem;
  }
</style>