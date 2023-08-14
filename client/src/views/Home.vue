<template>
    <Header @submit="getRestaurants" />
    <div class="mx-auto w-auto bg-tm_drakblue p-3">
        <h2 class="text-center text-xl text-white">
            {{ queryText }}
        </h2>
    </div>
    <div class="flex flex-col sm:flex-row">
        <!-- List Restaurant -->
        <div
            class="z-[99] order-last flex h-full max-w-full flex-col overflow-auto bg-slate-50 shadow-lg sm:h-screen sm:w-[30rem] sm:pb-[310px]"
        >
            <div class="mt-20 flex justify-center" v-if="loading">
                <span class="loader"></span>
            </div>
            <ListRestaurant
                v-for="(restaurant, index) in restaurants"
                :restaurant="restaurant"
                :key="index"
                @click="handleClickRestaurant"
            />
        </div>

        <!-- Google Map Display -->
        <div
            class="flex h-[45vh] max-h-screen w-full flex-col sm:order-last sm:h-screen sm:flex-row"
        >
            <GoogleMap
                class="h-full w-full sm:pb-[310px]"
                :api-key="apiKey"
                :center="center"
                :zoom="zoom"
            >
                <MarkerCluster>
                    <Marker
                        v-for="(restaurant, index) in places"
                        :key="index"
                        :options="{ position: restaurant.geometry.location }"
                        @click="center = restaurant.geometry.location"
                    >
                        <InfoWindow
                            :opened="center === restaurant.geometry.location"
                            >{{ restaurant.name }}</InfoWindow
                        >
                    </Marker>
                </MarkerCluster>
            </GoogleMap>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { GoogleMap, MarkerCluster, Marker, InfoWindow } from 'vue3-google-map';
import { RestaurantResult } from '@/types/restaurantResult.ts';
import axios from 'axios';
import Header from '@/components/Header.vue';
import ListRestaurant from '@/components/ListRestaurants.vue';

// Type of Lat and Lng
interface GmapTypes {
    lat: number;
    lng: number;
}
// Default location when page loaded and inital API key
const center = ref<GmapTypes>({ lat: 13.8257783, lng: 100.5277756 });
const zoom = ref<number>(15);
const loading = ref<boolean>(false);
const apiKey: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY as string;

// set for restaurants results list after get response from API
const restaurants = ref<RestaurantResult[]>([]);
const places = ref<RestaurantResult[]>([]);
const queryText = ref<string>('บางซื่อ');

// Function call to API endpoint to get list of restaurants
const getRestaurants = async (query: string = 'บางซื่อ') => {
    try {
        const response = await axios.get(
            `http://localhost:5001/api/restaurant/search/?query=${query}`
        );

        restaurants.value = [];
        places.value = [];
        loading.value = true;

        setTimeout(() => {
            restaurants.value = response.data.results;
            places.value = response.data.results;
            zoom.value = 15;
            center.value = response.data.results[0].geometry.location;
            queryText.value = query;
            loading.value = false;
        }, 1000);
    } catch (error) {
        console.error('Error fetching restaurant data:', error);
    }
};

// Handle click the list to align the map location
const handleClickRestaurant = (location: object) => {
    center.value = location as GmapTypes;
    zoom.value = 18;
    places.value = {
        ...restaurants.value.filter(
            (item) => item.geometry.location === location
        ),
    };
};

// Mounted to get the first loading restaurant default Bang sue
onMounted(async () => {
    getRestaurants();
});
</script>

<style scoped>
.loader {
    color: bg-tm_drakblue;
    font-size: 45px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    transform: translateZ(0);
    animation:
        mltShdSpin 1.7s infinite ease,
        round 1.7s infinite ease;
}

@keyframes mltShdSpin {
    0% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em,
            0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em,
            0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            -0.087em -0.825em 0 -0.42em,
            -0.173em -0.812em 0 -0.44em,
            -0.256em -0.789em 0 -0.46em,
            -0.297em -0.775em 0 -0.477em;
    }
    20% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em,
            -0.671em -0.488em 0 -0.46em,
            -0.749em -0.34em 0 -0.477em;
    }
    38% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em,
            -0.775em -0.297em 0 -0.46em,
            -0.82em -0.09em 0 -0.477em;
    }
    100% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em,
            0 -0.83em 0 -0.477em;
    }
}

@keyframes round {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
