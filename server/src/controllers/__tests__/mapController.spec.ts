import { describe, it, expect } from '@jest/globals';
import supertest from 'supertest';
import { createServer } from '../../utils/server';
import jest from 'jest';

const app = createServer();

describe('mapController', () => {
    describe('verify token to access route and get list restaurant', () => {
        it('should return a 401 if not have token', async () => {
            const response = await supertest(app).get(`/api/restaurant/search`);

            expect(response.status).toBe(401);
        });
        it('should return a 403 if have token but not correctly', async () => {
            const accessToken = 'access-token-not-correctly';
            const response = await supertest(app)
                .get(`/api/restaurant/search`)
                .set('Authorization', `Bearer ${accessToken}`);
            expect(response.status).toBe(403);
        });

        it('should return a 403 if have token and correctly', async () => {
            const accessToken = process.env.ACCESS_TOKEN_CLIENT_SECRET;
            const response = await supertest(app)
                .get(`/api/restaurant/search`)
                .set('Authorization', `Bearer ${accessToken}`);
            expect(response.status).toBe(200);
        });
    });
});
