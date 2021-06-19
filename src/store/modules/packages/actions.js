const search = ({ commit, dispatch, getters }, searchString) => {
  const prevSearchString = getters.searchString
  searchString = searchString === null ? '' : searchString

  if (searchString !== prevSearchString) {
    commit('updateSearchString', searchString)
    dispatch('fetchPackages', searchString)
  }
}

const fetchPackages = async ({ commit }, text, size = 100) => {
  const res = await fetch(
    `http://registry.npmjs.com/-/v1/search?text=${text}&size=${size}`
  );
  let data = await res.json()
  let packages = data.objects.map((searchData, index) => {
    return {id: index, ...searchData.package} 
  })
  commit('updatePackages', packages)
}

const setCurrentPackageId = ({ commit }, id) => {
  commit('updateCurrentPackageId', id)
}

export default {
  search,
  fetchPackages,
  setCurrentPackageId,
}