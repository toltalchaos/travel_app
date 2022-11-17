<!-- a map object for location picking -->
<script>
	// https://leafletjs.com/examples/quick-start/
    // https://leafletjs.com/reference.html
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
    
	let mapElement;
	let map;

	export let mapMarker = [51.5, -0.09];
    
	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');
            var popup = leaflet.popup();


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
			// 	.marker(mapMarker)
			// 	.addTo(map)
			// .bindPopup('words go HERE - reflecting location type')
			// .openPopup();

			function onMapClick(e) {
				popup
					.setLatLng(e.latlng)
					.setContent('You clicked the map at ' + e.latlng.toString())
					.openOn(map);
                    mapMarker = [e.latlng.lat,e.latlng.lng]
                    console.log(e.latlng, mapMarker)
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

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 800px;
	}
</style>
