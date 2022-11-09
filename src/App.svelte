<script>
  import { Router, Route } from "svelte-routing";
  import Footer from "./components/footer.svelte";

  import Header from "./components/header.svelte";
  import NavDeck from "./components/navDeck.svelte";
  import Accomidations from "./pages/accomidations.svelte";
  import Events from "./pages/events.svelte";
  import Finalize from "./pages/finalize.svelte";
  import Home from "./pages/home.svelte";
  import LocalTravel from "./pages/localTravel.svelte";
  import Locations from "./pages/locations.svelte";
  import TravelMethods from "./pages/travelMethods.svelte";

  export let url = "";
</script>

<Router url={url}>
<Header />
<main>
    <Route path="" component={Home} />
    <Route path="locations" component={Locations} />
    <Route path="travel-Methods" component={TravelMethods} />
    <Route path="accomidations" component={Accomidations} />
    <Route path="events" component={Events} />
    <Route path="local-travel" component={LocalTravel} />
    <Route path="finalize" component={Finalize} />
</main>
  <Footer />
</Router>

<style>
  @media (min-width: 640px) {
  }
</style>
