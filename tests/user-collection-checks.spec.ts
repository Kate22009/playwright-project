import { test, expect } from '@playwright/test';

test("Check new users created created with given input array", async ({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/user/createWithArray`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: [
        {
          "id": 0,
          "username": "string",
          "firstName": "string",
          "lastName": "string",
          "email": "string",
          "password": "string",
          "phone": "string",
          "userStatus": 0
        }
      ],
    });
    expect(response.status()).toBe(200);
  });

  test("Check new user created with given list", async ({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/user/createWithList`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: [
        {
          "id": 0,
          "username": "string",
          "firstName": "string",
          "lastName": "string",
          "email": "string",
          "password": "string",
          "phone": "string",
          "userStatus": 0
        }
      ],
    });
    expect(response.status()).toBe(200);
  });

  test("Check new user created", async ({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/user`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      },
    });
    expect(response.status()).toBe(200);
  });

  test("Can get user by user name", async ({ request }) => {
    const response = await request.get(`https://petstore.swagger.io/v2/user/string`, {
      headers: {
        accept: "application/json",
      },
    });
    expect(response.status()).toBe(200);
  });
  test("Can update user name", async ({ request }) => {
    const response = await request.put(`https://petstore.swagger.io/v2/user/strong`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      },
    });
    expect(response.status()).toBe(200);
  });

  test("Check user deleted", async ({ request }) => {
    const response = await request.delete(`https://petstore.swagger.io/v2/user/string`, {
      headers: {
        accept: "application/json",
      },
    });
    expect(response.status()).toBe(200);
  });

  test("Check user login", async ({ request }) => {
    const response = await request.get(`https://petstore.swagger.io/v2/user/login?username=string&password=string`, {
      headers: {
        accept: "application/json",
      },
    });
    expect(response.status()).toBe(200);
  });

  test("Check user logout", async ({ request }) => {
    const response = await request.get(`https://petstore.swagger.io/v2/user/logout`, {
      headers: {
        accept: "application/json",
      },
    });
    expect(response.status()).toBe(200);
  });