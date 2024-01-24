const { test, expect } = require('@playwright/test');
const apiUrl = 'https://reqres.in';

test('Positive API Test for PUT Request', async ({ request }) => {
    const endpoint = '/api/users/2';

    const payload ={
        "name": "morpheus",
        "job": "zion resident"
    };

    // Make the PUT request
    const response = await request.put(`${apiUrl}${endpoint}`, payload);
    // console.log(response)
    const data = response
    console.log(data)
    // Assert the response status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Positive API Test for DELETE Request', async ({request}) => {
    const endpoint = '/api/users/2';

    // Make the DELETE request
    const deleteRequest = await request.delete(`${apiUrl}${endpoint}`);
    console.log(deleteRequest)
    // Assert the response status code
    expect(deleteRequest.status()).toEqual(204);
    expect(deleteRequest.statusText()).toBe('No Content');

});

test('Positive API Test for PATCH Request', async ({request}) => {
    const endpoint = '/api/users/2';

    // Replace 'your-payload' with the actual payload for the PATCH request
    const payload ={
        "name": "morpheus",
        "job": "zion resident"
    };

    // Make the PATCH request
    const response = await request.patch(`${apiUrl}${endpoint}`, payload);

    // Assert the response status code
    expect(response.status()).toBe(200);
});
