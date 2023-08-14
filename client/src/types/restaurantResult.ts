// types.ts
export interface RestaurantResult {
    business_status: string;
    formatted_address: string;
    photos: {
        photo_reference: string;
    }[];
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
        viewport: {
            northeast: {
                lat: number;
                lng: number;
            };
            southwest: {
                lat: number;
                lng: number;
            };
        };
    };
    icon: string;
    name: string;
    opening_hours: {
        open_now: boolean;
    };
    place_id: string;
    rating: number;
    user_ratings_total: number;
}
