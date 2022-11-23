import {writable} from 'svelte/store'
import EventsObject from './events'
import TravelObject from './travel_obj'

const GlobalTravelObject = writable(new TravelObject())

const GlobalEventsObject = writable(new EventsObject())

export default GlobalTravelObject