export default {
  updateAddresses({ commit }, addresses) {
    commit('updateSavedAddresses', addresses);
  }
};