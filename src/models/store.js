import {writable} from 'svelte/store'
import TravelObject from './travel_obj'

const GlobalObject = writable(new TravelObject({test:"value"}))

export default GlobalObject