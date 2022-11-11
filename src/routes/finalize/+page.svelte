<script>
import store from '../../models/store';
import {getContext} from 'svelte';

let storedata;
store.subscribe((data) => {
  storedata = data
})

</script>

<main>
	<h1>finalize</h1>
  <h2>Store Data => {JSON.stringify(storedata)}</h2>
</main>

<style>
  @media (min-width: 640px) {
  }
</style>