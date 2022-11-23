<script>
import LeafletMap from "../../components/map/LeafletMap.svelte";
	import NavButton from "../../components/navButton.svelte";
  import GlobalTravelObject from '../../models/store';



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
  {#if $GlobalTravelObject.departure_location.lat !== undefined
  &&
  $GlobalTravelObject.destination_location.lat !== undefined}
			<section>
				<NavButton location={"travel-methods"} text={"Next"}/>
			</section>
{/if}
</main>
<style>
  .map{
		height:30vh;
		width: calc(100%-1rem);
    padding:1rem;
    margin:1rem;
	}
  section{
    margin: 1rem;
  }
  @media (min-width: 640px) {
  }
</style>