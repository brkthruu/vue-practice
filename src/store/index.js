import { createStore } from 'vuex';

export default createStore({
	state: {
		count: 10
	},
	getters: {
		time2(state) {
			return state.counter * 2;
		}
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		}
	}
})