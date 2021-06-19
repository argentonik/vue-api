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
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>{{ currentPackage.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Version</v-list-item-title>
            <v-list-item-subtitle>{{ currentPackage.version }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Description</v-list-item-title>
            <v-list-item-subtitle>{{ currentPackage.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Publisher</v-list-item-title>
            <v-list-item-subtitle>{{ currentPackage.publisher.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="currentPackage.keywords">
          <v-list-item-content>
            <v-list-item-title>Keywords</v-list-item-title>
            <v-list-item-subtitle>
              <v-chip class="mr-2 mt-1" v-for="keyword in currentPackage.keywords.slice(0, 3)" :key="keyword">
                {{ keyword }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div v-if="currentPackage.details">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Current package version usage stats for month</v-list-item-title>
              <v-list-item-subtitle>{{ currentPackage.details.stats }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

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
    margin-left: 1rem;
  }
</style>