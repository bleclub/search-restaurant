import {
    searchRestaurant,
    searchRestaurantAxios,
} from './../controllers/mapController';
import express from 'express';

export const mapRouter = express.Router();

mapRouter.get('/restaurant', searchRestaurantAxios);
mapRouter.get('/restaurant/search', searchRestaurant);
