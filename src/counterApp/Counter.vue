<template>
	<div>
    <h1>COUNTER</h1>
    <div>{{count}}</div>
    <button @click="increment">UP VOTE</button>
		<button @click="decrement">Down VOTE</button>
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
			increment: () => store.commit('increment'),		// mutation 호출
			decrement: () => store.commit('decrement'),
		}
	}
}
</script>
<style>
		
</style>