// Base url: VITE_BACK_END_SERVER_URL in .env file
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}api/funkopops/`;


// Fetch all FUnko Pops
const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

// "Show" data for specific Funko Pop
const show = async (funkoId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + funkoId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Create a new Funko Pop
const create = async (funko) => {
	try {
		const res = await fetch(BASE_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(funko),
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

// Update a Funko Pop
const updateFunkoPop = async (funko, funkoId) => {
    // Construct the request URL by concatenating the base URL and the funkoID
    // The trailing slash is added to ensure the URL is properly formatted
    const REQ_URL = `${BASE_URL}${funkoId}/`;

    try {
        // Send a PUT request to the specified URL
        const response = await fetch(REQ_URL, {
            method: 'PUT', // Specify the HTTP method as PUT for updating resources
            headers: {
                'Content-Type': 'application/json', // Set the content type header to JSON
            },
            body: JSON.stringify(funko), // Convert the funko object to a JSON string and include it in the request body
        });

        // Check if the response status is not in the 200-299 range, indicating an error
        if (!response.ok) {
            // Throw an error with the HTTP status code if the response is not successful
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // If the response is successful, the code execution continues without throwing an error
    } catch (err) {
        // If an error occurs during the fetch request or if the response is not successful,
        // catch the error and log it to the console for debugging purposes
        console.error('Error updating widget:', err);
    }
};


// Delete a Funko Pop
const deleteFunkoPop = async (funkoId) => {

    const REQ_URL = BASE_URL + funkoId
    try {
        const res = await fetch(REQ_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const deletedfunko = await res.json();
        return deletedfunko;
    } catch (err) {
        console.log(err);
    }
}

// Export the functions
export { index, show, create, updateFunkoPop, deleteFunkoPop };

