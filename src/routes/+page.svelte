<!-- home component/langing page -->
<script>
	import { text } from 'svelte/internal';
import NavButton from '../components/navButton.svelte';
import GlobalTravelObject from '../models/store';

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	function changeGlobalValue(value) {
		GlobalTravelObject.update((current) => {
			return current.setTimelineData(value);
		});
	}
</script>

<main>
	<h1>Homepage</h1>
	<form action="">
		<div class="trip-departure-time">
			<label for="departure-day">Departure date:</label>
			<input
				type="date"
				id="departure-day"
				name="trip-start-day"
				min={today}
				required
				on:change={(e) => {
					changeGlobalValue({ trip_departure_date: e.target.value });
				}}/>

			<!-- <label for="departure-time">Choose a time for your departure:</label>
			<input
				type="time"
				id="departure-time"
				name="trip-start-time"
				required
				on:change={(e) => {
					changeGlobalValue({ trip_departure_time: e.target.value });
				}}/> -->
		</div>

		<div class="trip-arrival-time">
			<label for="arrival-day">Arrival date:</label>
			<input
				type="date"
				id="arrival-day"
				name="trip-end-day"
				min={$GlobalTravelObject.timeline_data.trip_departure_date == undefined ? today : $GlobalTravelObject.timeline_data.trip_departure_date }
				required
				on:change={(e) => {
					changeGlobalValue({ trip_arrival_date: e.target.value });
				}}
			/>

			<!-- <label for="arrival-time"
				>Choose a time for your arrival back home at the end of the trip:</label>
			<input
				type="time"
				id="arrival-time"
				name="trip-end-time"
				required
				on:change={(e) => {
					changeGlobalValue({ trip_arrival_time: e.target.value });
				}}
			/> -->
		</div>
	</form>
{#if $GlobalTravelObject.timeline_data.trip_arrival_date !== undefined}
			<section>
				<NavButton location={"locations"} text={"next"}/>
			</section>
{/if}

</main>

<style>
	main {
		background-color: rgb(95, 154, 248);
		margin: 2rem;
	}
	form{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding:1rem;
	}
	.trip-departure-time, .trip-arrival-time{
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	label{
		margin-top: 1rem;
		font-size: large;
		font-weight: bold;
	}
	input{
		padding:0.5rem;
		border-radius: 1rem;
	}
	input:hover{
		background-color: grey;
		cursor: pointer;
	}

	@media (min-width: 640px) {
	}
</style>
