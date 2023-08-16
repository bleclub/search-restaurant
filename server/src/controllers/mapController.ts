import { Request, Response } from 'express';
import axios from 'axios';
import {
    Client,
    PlaceType1,
    TextSearchRequest,
    TextSearchResponse,
} from '@googlemaps/google-maps-services-js';

// Test Google Map API call with Axios
export const searchRestaurantAxios = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
        const response = await axios.get(
            'https://maps.googleapis.com/maps/api/place/textsearch/json',
            {
                params: {
                    query,
                    type: 'restaurant',
                    key: process.env.GOOGLE_API_KEY,
                },
            },
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

// API endpoint for search restaurant from google map api using google-maps-services-js
export const searchRestaurant = async (req: Request, res: Response) => {
    const { query } = req.query;
    const googleMapClient = new Client({
        config: {
            params: {
                key: process.env.GOOGLE_API_KEY,
            },
        },
    });

    try {
        let nextPageToken: string | undefined = '';
        const response: TextSearchResponse = await googleMapClient.textSearch({
            params: {
                query: (query as string) || 'บางซื่อ',
                radius: 500,
                type: PlaceType1.restaurant,
                pagetoken: nextPageToken,
            } as TextSearchRequest['params'],
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching nearyby restaurant', error);
        return res.status(500).json({ error: 'An error occurred' });
    }
};
