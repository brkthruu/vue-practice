<template>
	<div>
    <h1>COUNTER</h1>
    <div>{{count}}</div>
		<div>{{time2}}</div>
    <button @click="increment">UP VOTE</button>
		<button @click="decrement">Down VOTE</button>
		<button @click="incrementIfOdd">Increment If Odd</button>
		<button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'Counter',
	setup() {
		const store = useStore();

		return { 
			count: computed(() => store.state.count ),
			// increment: () => store.commit('increment'),		// mutation 호출
			// decrement: () => store.commit('decrement'),
			time2: computed(() => store.getters.time2),
			increment: () => store.dispatch('increment'),
			decrement: () => store.dispatch('decrement'),
			incrementIfOdd: () => store.dispatch('incrementIfOdd'),
			incrementAsync: () => store.dispatch('incrementAsync')
		}
	}
}
</script>
<style>
		
</style>