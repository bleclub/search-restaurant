import axios from 'axios';

const baseURL: string = import.meta.env.VITE_API_ENDPOINT;

export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
            import.meta.env.VITE_ACCESS_TOKEN_CLIENT_SECRET
        }`,
    },
    withCredentials: true,
});
