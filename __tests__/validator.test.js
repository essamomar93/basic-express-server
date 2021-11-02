'use strict';
const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Validator Test', () => {

    test('the name is in the query string', async () => {
        let response = await mockRequest.get('/person?name=essam');
        expect(response.status).toEqual(200);
    });
   
    test(' no name in the query string', async () => {
        const response = await mockRequest.get('/person?name');
        expect(response.status).toBe(500);
    });

});