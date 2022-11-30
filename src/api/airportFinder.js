import axios from 'axios';
import {GOOGLE_PLACES_API_KEY} from '$env/static/private'

export async function airportFinder(lat, long) {
    let resp = await axios.get(`http://www.iatageo.com/getCode/${lat}/${long}`)
    // {
    //     "data": {
    //         "name": "Edmonton International Airport",
    //         "code": "YEG",
    //         "IATA": "YEG",
    //         "ICAO": "CYEG",
    //         "distance_meters": "23692"
    //     },
    //     "status": 200,
    //     "statusText": "OK",
    //     "headers": {
    //         "content-length": "107",
    //         "content-type": "application/json; charset=utf-8"
    //     },
    //     "config": {
    //         "transitional": {
    //             "silentJSONParsing": true,
    //             "forcedJSONParsing": true,
    //             "clarifyTimeoutError": false
    //         },
    //         "adapter": [
    //             "xhr",
    //             "http"
    //         ],
    //         "transformRequest": [
    //             null
    //         ],
    //         "transformResponse": [
    //             null
    //         ],
    //         "timeout": 0,
    //         "xsrfCookieName": "XSRF-TOKEN",
    //         "xsrfHeaderName": "X-XSRF-TOKEN",
    //         "maxContentLength": -1,
    //         "maxBodyLength": -1,
    //         "env": {},
    //         "headers": {
    //             "Accept": "application/json, text/plain, */*"
    //         },
    //         "method": "get",
    //         "url": "http://www.iatageo.com/getCode/53.51166460802872/-113.49288940429689"
    //     },
    //     "request": {}
    // }
    console.log(resp)
    return resp.data.code
 }
