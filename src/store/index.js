import { createStore } from 'vuex';

export default createStore({
	state: {
		count: 10
	},
	getters: {
		time2(state) {
			return state.count * 2;
		}
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		}
	},
	actions: {
		increment: ({ commit }) => commit('increment'),
		decrement: ({ commit }) => commit('decrement'),
		incrementIfOdd ({ commit, state }) {
			if ((state.count + 1) % 2 === 0) {
				commit('increment')
			}
		},
		incrementAsync ({ commit }) {
			return new Promise((resolve) => {
				setTimeout(() => {
					commit('increment')
					resolve()
				}, 1000)	//1초 후 증가
			})
		}
	}
})