export default class TravelObject {
	constructor(data) {
		this.payload = data;
        this.personal_information;
        this.send_email = false;
	}

	addToPayload(data) {
		Object.keys(data).forEach((key, index) => {
			if (this.payload !== undefined) {
				if (key in this.payload) {
					this.payload[key] = data[key];
				} else {
					this.payload = { ...this.payload, [key]: data[key] };
				}
			} else {
				this.payload = { [key]: data[key] };
			}
		});
		return this;
	}
}
