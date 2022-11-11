<!-- home component/langing page -->
<script>
	import GlobalObject from '../models/store'

	let input = null;
	let currentGlobalData;
	GlobalObject.subscribe((currentValue) => {
		currentGlobalData = currentValue;
	});

	function changeValue() {
		currentGlobalData.addToPayload({input:input})
		GlobalObject.update(x => x)
		input = null;
	}
</script>

<main>
	<h1>Homepage</h1>
	<input type="text" bind:value={input} />
	<button on:click={changeValue}>add to finalize payload json</button>
</main>

<style>
	@media (min-width: 640px) {
	}
</style>
