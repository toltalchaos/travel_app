<script>
	import LeafletMap from "../../components/map/LeafletMap.svelte";



</script>

<main>
  <div class="map">
    <h3>Enter your Starting Location</h3>
    <LeafletMap travel_time="Starting location"/>
  </div>
  <div class="map">
    <h3>Enter your travel destination</h3>
    <LeafletMap travel_time="Destination"/>
  </div>
</main>
<style>
  .map{
		height:30vh;
		width: calc(100%-1rem);
    padding:1rem;
	}
  @media (min-width: 640px) {
  }
</style>