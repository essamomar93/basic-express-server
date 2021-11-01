'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {

    test('/hello works', async () => {

        const response = await mockRequest.get('/hello');
        expect(response.status).toBe(200);

    });

    test('Should respond with 404 status on an invalid method', async () => {

        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);

    });

    test('should respond with 500 on an error', async () => {

        const response = await mockRequest.get('/error');
        expect(response.status).toBe(500);

    });

});