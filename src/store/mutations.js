export default {
	updateSavedAddresses(state, addresses) {
		state.savedAddresses = addresses;
		localStorage.setItem('savedAddresses', JSON.stringify(addresses));
	}
};