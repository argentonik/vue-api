export default {
  state: {
    packages: []
  },
  actions: {
    async fetchPackages(ctx, text, size = 100) {
      const res = await fetch(
        `http://registry.npmjs.com/-/v1/search?text=${text}&size=${size}`
      );
      let data = await res.json()
      let packages = data.objects.map(searchData => searchData.package)
      ctx.commit('updatePackages', packages)
    }
  },
  mutations: {
    updatePackages(state, packages) {
      state.packages = packages
    }
  },
  getters: {
    allPackages(state) {
      return state.packages
    }
  },
}