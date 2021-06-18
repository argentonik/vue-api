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
