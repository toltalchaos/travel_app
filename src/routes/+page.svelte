<!-- home component/langing page -->
<script>
	import log_me from '../components/test';
	import { getContext } from 'svelte';
	let travel_obj = getContext('travel_obj');
	let input = null;

	function changeContext() {
		$travel_obj.addToPayload({ input: input });
	}
</script>

<main>
	<h1>Homepage + {input}</h1>
	<input
		type="text"
		on:input={(e) => {
			input = e.target.value;
		}}
	/>
	<button on:click={log_me}>log me test js</button>
	<button on:click={changeContext}>add to travel btn</button>
</main>

<style>
	@media (min-width: 640px) {
	}
</style>
