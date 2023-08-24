export default {
	ADD_ADDRESS(state, address) {
		state.addresses.unshift(address);
	},
	UPDATE_ADDRESS(state, { index, address }) {
		state.addresses[index] = address;
	},
	DELETE_ADDRESS(state, index) {
		state.addresses.splice(index, 1);
	},
  };
  