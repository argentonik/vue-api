<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Vue test app</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <PackageList />
    </v-main>

    <v-footer padless>
      <v-col
        class="text-right"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on: tooltip }">
            <a 
              href="https://github.com/argentonik/vue-api" 
              target="_blank" 
              class="github-link" 
              v-on="{ ...tooltip }"
            >
              <v-icon size="32px" color="black">
                mdi-github
              </v-icon>
            </a>
          </template>
          <span>Github</span>
        </v-tooltip>
        Author: Marina Parkhomenko

      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import PackageList from './views/PackageList.vue';

export default {
  name: 'App',
  components: {
    PackageList,
  }
};
</script>

<style scoped>
  .github-link {
    text-decoration: none;
  }
</style>
