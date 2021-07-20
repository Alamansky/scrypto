const axios = require('axios');
const colors = require('colors');
const { formatApiRes } = require('../utils/formatApiRes');
const { handleApiError } = require('../utils/handleApiError');

class CryptoAPI {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = `https://api.nomics.com/v1/currencies/ticker`
	}

	async getPriceData(coinOption, curOption) {
		try {
			const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`)
			return formatApiRes({res, coinOption, curOption});
		} catch (error) {
			handleApiError(error);
		}
	}
}

module.exports = CryptoAPI;