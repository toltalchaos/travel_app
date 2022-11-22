export default class TravelObject {
	constructor(data) {
		this.payload = data;
        this.personal_information = {};
        this.send_email = false;
		this.timeline_data = {};
		this.departure_location = {};
		this.destination_location = {};
		this.travel_methods = {primary : "Driving"};
		this.accommodations = {price:""}
	}

	addToValue(data, obj){
		Object.keys(data).forEach((key, index) => {
			if (obj !== undefined) {
				if (key in obj) {
					obj[key] = data[key];
				} else {
					obj = { ...obj, [key]: data[key] };
				}
			} else {
				obj = { [key]: data[key] };
			}
		});
		return obj
	}
	addToPayload(data) {
		this.payload = this.addToValue(data, this.payload)
		return this
	}
	setDepartureData(data){
		this.departure_location = this.addToValue(data, this.departure_location)
		return this
	}
	setDestinationData(data){
		this.destination_location = this.addToValue(data, this.destination_location)
		return this
	}
	setTimelineData(data){
		this.timeline_data = this.addToValue(data, this.timeline_data)
		return this
	}
	setMainTravel(data){
		this.travel_methods = this.addToValue(data, this.travel_methods)
		return this
	}
	setAccommodations(data){
		this.accommodations = this.addToValue(data, this.accommodations)
		return this
	}
}
