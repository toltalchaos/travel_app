export default class TravelObject{
    constructor(data){
        this.payload = data
    }

    addToPayload(data){
        Object.keys(data).forEach((key,index) => {
            if(key in this.payload){
                this.payload[key] = data[key]
            }
            else{
                this.payload = {...this.payload, [key]:data[key]}
            }
        })
        return this
    }

}