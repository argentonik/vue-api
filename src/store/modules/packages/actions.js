import axios from 'axios'

const search = ({ commit, dispatch, getters }, searchString) => {
  const prevSearchString = getters.searchString
  searchString = searchString === null ? '' : searchString

  if (searchString !== prevSearchString) {
    commit('updateSearchString', searchString)
    dispatch('fetchPackages', searchString)
  }
}

const fetchPackages = async ({ commit }, text, size = 100) => {
  const res = await axios.get(
    `http://registry.npmjs.com/-/v1/search?text=${text}&size=${size}`
  );
  let packages = res.data.objects.map((searchData, index) => {
    return {id: index, ...searchData.package} 
  })
  commit('updatePackages', packages)
}

const fetchPackageDetails = async ({ commit, getters, dispatch }) => {
  const currentPackage = getters.currentPackage
  if (!currentPackage || currentPackage.details) {
    return
  }

  dispatch('setLoadingStatus', true)
  const [ badge, rank, stats ] = await axios.all([
    axios.get(`https://data.jsdelivr.com/v1/package/npm/${currentPackage.name}/badge?style=rounded`),
    axios.get(`https://data.jsdelivr.com/v1/package/npm/${currentPackage.name}/badge/rank?style=rounded`),
    axios.get(`https://data.jsdelivr.com/v1/package/npm/${currentPackage.name}@${currentPackage.version}/stats`)
  ])
  currentPackage.details = {
    badge: badge.data,
    rank: rank.data,
    stats: stats.data.total
  }
  commit('updatePackage', currentPackage)
  dispatch('setLoadingStatus', false)
}

const setCurrentPackageId = ({ commit, dispatch }, id) => {
  commit('updateCurrentPackageId', id)

  dispatch('fetchPackageDetails')
}

const setLoadingStatus = ({ commit }, value) => {
  commit('updateLoadingStatus', value)
}

export default {
  search,
  fetchPackages,
  fetchPackageDetails,
  setCurrentPackageId,
  setLoadingStatus,
}