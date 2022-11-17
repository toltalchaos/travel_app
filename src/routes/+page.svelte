<!-- home component/langing page -->
<script>
	import LeafletMap from '../components/map/LeafletMap.svelte';
import GlobalObject from '../models/store';

	let input = null;
	function changeValue() {
		GlobalObject.update((current) => {
			return current.addToPayload({ input: input });
		});
		input = null;
	}
</script>

<main>
	<h1>Homepage</h1>
	<input type="text" bind:value={input} />
	<button on:click={changeValue}>add to finalize payload json</button>
	<LeafletMap/>
</main>

<style>
	main{
		background-color: tomato;
	}
	@media (min-width: 640px) {
	}
</style>
