//https://stackoverflow.com/questions/70472978/sveltekit-proxy-api-to-avoid-cors

// /** @type {import('./$types').RequestHandler} */
// export async function GET() {
//     return new Response();
// };

export async function callSkyscanner(headers, body, url, method){
    try{
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        let response = fetch(url, {
            method: method,
            headers : headers,
            body: JSON.stringify(body)
        })
        return response
    }
    catch(error){
        return error
    }
    
}