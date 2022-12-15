<script>
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { airportFinder } from '../../api/airportFinder';
	import { getFlights } from '../../api/skyscanner';
	import ProgressBar from '../../components/progressBar.svelte';
	import GlobalTravelObject from '../../models/store';

	let progress;
	let departure_airport = null;
	let destination_airport = null;

	onMount(async () => {
		if ($GlobalTravelObject.departure_location.lat !== undefined) {
			departure_airport = await airportFinder(
				$GlobalTravelObject.departure_location.lat,
				$GlobalTravelObject.departure_location.long
			);
		}
		if ($GlobalTravelObject.destination_location.lat !== undefined) {
			// destination_airport = await airportFinder(
			// 	$GlobalTravelObject.destination_location.lat,
			// 	$GlobalTravelObject.destination_location.long
			// );
			destination_airport = 'YVR'
		}
	});
	$: if (destination_airport != null && departure_airport != null) {
		getFlights(departure_airport, destination_airport, $GlobalTravelObject).then((resp) => {
			progress = resp;
		});
	}
	//populate lists of bookable flights displaying key data, onclick for each flight overwrite the global obj
</script>

<section>
	<div>
		flight section departure_airport={departure_airport} destination_airport={destination_airport}
	</div>
	<div class="progress">
		<ProgressBar {progress} />
	</div>
</section>

<style>
	div {
		background-color: plum;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.progress {
		padding: 1rem;
	}
</style>
