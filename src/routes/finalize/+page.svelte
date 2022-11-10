<script>
import {getContext} from 'svelte'
let travel_obj = getContext('travel_obj');
</script>

<main>
	<h1>finalize</h1>
  <h2>{JSON.stringify($travel_obj)}</h2>
</main>

<style>
  @media (min-width: 640px) {
  }
</style>