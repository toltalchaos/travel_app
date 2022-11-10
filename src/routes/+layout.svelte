<script>
import Footer from '../components/footer.svelte';
import Header from '../components/header.svelte';
import TravelObject from '../models/travel_obj'

import {setContext} from 'svelte';
import {writable} from 'svelte/store';

const travel_obj = writable( new TravelObject());
setContext('travel_obj', travel_obj);

</script>

<Header/>
<slot/>
<Footer/>