<!-- header for project, should include navdeck -->
<script>
  import NavDeck from "./navDeck.svelte";
  import GlobalObject from '../models/store'

  let storedata;
  GlobalObject.subscribe((data) => {
    storedata = data
  })
</script>

<header>
	<h2>header</h2>
  <h2>Store Data => {JSON.stringify(storedata)}</h2>
  <NavDeck/>
</header>

<style>
  @media (min-width: 640px) {
  }
</style>