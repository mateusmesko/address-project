export default {
  addAddress({ commit }, address) {
    commit('ADD_ADDRESS', address);
  },
  updateAddress({ commit }, payload) {
    commit('UPDATE_ADDRESS', payload);
  },
  deleteAddress({ commit }, index) {
    commit('DELETE_ADDRESS', index);
  },
};
