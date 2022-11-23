<!-- a map object for location picking -->
<script>
	// https://leafletjs.com/examples/quick-start/
	// https://leafletjs.com/reference.html
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import GlobalTravelObject from '../../models/store';

	let mapElement;
	let map;

	export let mapMarker = [,];
	export let travel_time;

	function changeGlobalValue(locationValue) {
		GlobalTravelObject.update((current) => {
			if(travel_time == 'Destination'){
				return current.setDestinationData({ ...locationValue});
			}
			return current.setDepartureData({ ...locationValue});
		});
	}

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			//map outline box
			map = leaflet.map(mapElement).setView([0, 0], 3);

			//map image rendering
			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			// leaflet
				// .marker(mapMarker)
				// .addTo(map)
				// .bindPopup('click your current location')
				// .openPopup();

			function onMapClick(e) {
				leaflet.popup()
					.setLatLng(e.latlng)
					.setContent(`${travel_time}`)
					.openOn(map);
				mapMarker = [e.latlng.lat, e.latlng.lng];
				changeGlobalValue({lat:e.latlng.lat, long:e.latlng.lng})
			}
			map.on('click', onMapClick);
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<div>
	<div bind:this={mapElement} />
</div>

<style>
	/* @import 'leaflet/dist/leaflet.css'; */
	div{
		height: 100%;
		width: 100%;
	}
	main div {
		height: 800px;
	}
</style>
