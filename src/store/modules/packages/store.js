import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const getDefaultState = () => {
  return {
    searchString: '',
    packages: [],
    currentPackageId: null,
  }
}

export default {
  state: getDefaultState(),
  actions,
  mutations,
  getters,
}    