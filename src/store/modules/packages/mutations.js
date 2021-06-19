const updateLoadingStatus = (state, value) => {
  state.loading = value
}

const updateSearchString = (state, string) => {
  state.searchString = string
}

const updatePackages = (state, packages) => {
  state.packages = packages
}

const updateCurrentPackageId = (state, id) => {
  state.currentPackageId = id
}

const updatePackage = (state, updatedPackage) => {
  var index = state.packages.findIndex(function(item) {
    return item.id === updatedPackage.id;
  });

  state.packages = [
    ...state.packages.slice(0, index),
    updatedPackage,
    ...state.packages.slice(index + 1)
  ]
}

export default {
  updateLoadingStatus,
  updateSearchString,
  updatePackages,
  updateCurrentPackageId,
  updatePackage,
}