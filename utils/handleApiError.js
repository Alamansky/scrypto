const handleApiError = (error) => {
	switch(error.response.status) {
		case 401:
			throw new Error('Your API key is invalid.');
			break;
		case 404:
			throw new Error('The API is not responding.');
			break;
		default:
			throw new Error('Something is not working.')
	}
}

module.exports = { handleApiError }