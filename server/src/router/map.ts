import { verifyToken } from './../middleware/verifyToken';
import {
    searchRestaurant,
    searchRestaurantAxios,
} from './../controllers/mapController';
import express from 'express';

export const mapRouter = express.Router();

// Protect route via verfyToken before to access the route
mapRouter.get('/restaurant', verifyToken, searchRestaurantAxios);
mapRouter.get('/restaurant/search', verifyToken, searchRestaurant);
