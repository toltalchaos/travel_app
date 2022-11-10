export default class TravelObject{
    constructor(data){
        this.payload = data
    }

    addToPayload(data){
        this.payload = {...data, ...this.payload}
    }

}