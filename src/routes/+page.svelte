<!-- home component/langing page -->
<script>
	import LeafletMap from '../components/map/LeafletMap.svelte';
	import GlobalObject from '../models/store';

	let input = null;
	function changeGlobalValue(value) {
		GlobalObject.update((current) => {
			return current.addToPayload({ ...value });
		});
		input = null;
	}
</script>

<main>
	<h1>Homepage</h1>
	<form action="">
		<input type="text" bind:value={input} />
		<button
			on:click={(e) => {
				changeGlobalValue({ input: input });
			}}>add to finalize payload json</button
		>

		<div class="trip-departure-time">
			<label for="departure-day">Departure date:</label>
			<input
				type="date"
				id="departure-day"
				name="trip-start-day"
				on:change={(e) => {
					changeGlobalValue({ trip_departure_date: e.target.value });
				}}
			/>

			<label for="departure-time">Choose a time for your departure:</label>

			<input
				type="time"
				id="departure-time"
				name="trip-start-time"
				required
				on:change={(e) => {
					changeGlobalValue({ trip_departure_time: e.target.value });
				}}
			/>
		</div>

		<div class="trip-arrival-time">
			<label for="arrival-day">Arrival date:</label>
			<input
				type="date"
				id="arrival-day"
				name="trip-end-day"
				on:change={(e) => {
					changeGlobalValue({ trip_arrival_date: e.target.value });
				}}
			/>

			<label for="arrival-time"
				>Choose a time for your arrival back home at the end of the trip:</label
			>

			<input
				type="time"
				id="arrival-time"
				name="trip-end-time"
				required
				on:change={(e) => {
					changeGlobalValue({ trip_arrival_time: e.target.value });
				}}
			/>
		</div>
	</form>
</main>

<style>
	main {
		background-color: tomato;
		margin: 2rem;
	}

	@media (min-width: 640px) {
	}
</style>
