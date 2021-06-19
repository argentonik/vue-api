export default {
  state: {
    searchString: '',
    packages: []
  },
  actions: {
    search({ commit, dispatch, getters }, searchString) {
      const prevSearchString = getters.searchString
      searchString = searchString === null ? '' : searchString

      if (searchString !== prevSearchString) {
        commit('updateSearchString', searchString)
        dispatch('fetchPackages', searchString)
      }
    },
    async fetchPackages({ commit }, text, size = 100) {
      const res = await fetch(
        `http://registry.npmjs.com/-/v1/search?text=${text}&size=${size}`
      );
      let data = await res.json()
      let packages = data.objects.map(searchData => searchData.package)
      commit('updatePackages', packages)
    }
  },
  mutations: {
    updateSearchString(state, string) {
      state.searchString = string
    },
    updatePackages(state, packages) {
      state.packages = packages
    }
  },
  getters: {
    searchString(state) {
      return state.searchString
    },
    allPackages(state) {
      return state.packages
    }
  },
}