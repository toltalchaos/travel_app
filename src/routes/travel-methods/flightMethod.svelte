<script>
	import { onMount } from 'svelte';
    import { airportFinder } from '../../api/airportFinder'
    import GlobalTravelObject from '../../models/store';
    
    let departure_airport;
    let destination_airport;
    
onMount(async()=>{
    if($GlobalTravelObject.departure_location.lat !== undefined){
        departure_airport = await airportFinder($GlobalTravelObject.departure_location.lat, $GlobalTravelObject.departure_location.long)
    }
    if($GlobalTravelObject.destination_location.lat !== undefined){
        destination_airport = await airportFinder($GlobalTravelObject.destination_location.lat, $GlobalTravelObject.destination_location.long)
    }
})
//populate lists of bookable flights displaying key data, onclick for each flight overwrite the global obj
</script>

<div>flight section departure_airport={departure_airport} destination_airport={destination_airport} </div>


<style>
	div {
		background-color: plum;
	}
</style>
