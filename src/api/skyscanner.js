import axios from 'axios';
import {SKYSCANNER_API_KEY} from '$env/static/private'
import errorHandler from './axiosError';
//https://developers.skyscanner.net/docs/flights-live-prices/overview
//SKYSCANNER_API_KEY
//function to hole create query and poll query. loop until completed 1 call every 2-4 seconds
//currently assuming 1 adult in economy 
export async function getFlights(iata_depart, iata_arrival, travelObj){
    let headers = {
        'x-api-key': SKYSCANNER_API_KEY
    } 
    let body = {
        query: {
            market: "CA",
            locale: "en-GB",
            currency: "CDN",
            query_legs: [
                {
                    origin_place_id: {
                        iata: iata_depart
                    },
                    destination_place_id: {
                        iata: iata_arrival
                    },
                    date: {
                        year: parseInt(travelObj.timeline_data.trip_departure_date.slice(0,5)),
                        month: parseInt(travelObj.timeline_data.trip_departure_date.slice(5,8)),
                        day: parseInt(travelObj.timeline_data.trip_departure_date.slice(8,11))
                    }
                },
                {
                    origin_place_id: {
                        iata: iata_arrival
                    },
                    destination_place_id: {
                        iata: iata_depart
                    },
                    date: {
                        year: parseInt(travelObj.timeline_data.trip_arrival_date.slice(0,5)),
                        month: parseInt(travelObj.timeline_data.trip_arrival_date.slice(5,8)),
                        day:  parseInt(travelObj.timeline_data.trip_arrival_date.slice(8,11))
                    }
                }
            ],
            adults: 1,
            cabin_class: "CABIN_CLASS_ECONOMY"
        }
    }
    let response = await callSkyscanner(headers, body, 'https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create', 'POST')

    //return response.data.sessionToken
    return 0.8
}

async function callSkyscanner(headers, body, url, method){
    try{
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        let response = await fetch(url, {
            method: method,
            mode: 'no-cors',
            headers : headers,
            body: JSON.stringify(body)
        })
        console.log(response)
        return response
    }
    catch(error){
        return errorHandler(error)
    }
    
}