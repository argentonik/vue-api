const searchString = (state) => {
  return state.searchString
}

const allPackages = (state) => {
  return state.packages
}

const currentPackageId = (state) => {
  return state.currentPackageId
}

const currentPackage = (state) => {
  return state.packages.find(item => item.id === state.currentPackageId)
}

export default {
  searchString,
  allPackages,
  currentPackageId,
  currentPackage,
}