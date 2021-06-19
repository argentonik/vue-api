const updateSearchString = (state, string) => {
  state.searchString = string
}

const updatePackages = (state, packages) => {
  state.packages = packages
}

const updateCurrentPackageId = (state, id) => {
  state.currentPackageId = id
}

export default {
  updateSearchString,
  updatePackages,
  updateCurrentPackageId,
}