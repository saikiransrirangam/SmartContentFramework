/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - handleResponse
 **-------------------------------------------------------------------------------------
 */
export function handleResponse(response: any) {
	if (response?.results) {
		return response.results;
	}

	if (response?.data) {
		return response.data;
	}

	return response;
}

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - handleError
 **-------------------------------------------------------------------------------------
 */
export function handleError(error: any) {
	if (error.data) {
		return error.data;
	}
	return error;
}
