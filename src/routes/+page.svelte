<!-- home component/langing page -->
<script>
	import { getContext } from 'svelte';
	let travel_obj = getContext('travel_obj');
	let input = null;

	function changeContext() {
		$travel_obj.addToPayload({ 'input': input });
		input = null
	}
</script>

<main>
	<h1>Homepage + {input}</h1>
	<input
		type="text"
		bind:value={input}
	/>
	<button on:click={changeContext}>add to finalize payload json</button>
</main>

<style>
	@media (min-width: 640px) {
	}
</style>
