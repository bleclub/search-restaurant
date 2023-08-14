<template>
    <div
        class="mb-5 block max-w-screen-sm cursor-pointer rounded-lg bg-slate-50 shadow-md"
        @click="handleClick(restaurant.geometry.location)"
    >
        <div
            class="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light"
        >
            <img
                class="h-60 w-full rounded-t-lg object-cover"
                :src="photoUrl"
                :alt="restaurant.name"
            />

            <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            ></div>
        </div>
        <div class="p-4">
            <h5
                class="mb-2 text-[1rem] text-xl font-medium leading-tight text-neutral-800"
            >
                {{ restaurant.name }}
            </h5>
            <p class="mb-4 text-sm text-neutral-600">
                {{ restaurant.formatted_address }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RestaurantResult } from '@/types/restaurantResult';
import { PropType, computed, toRefs } from 'vue';

const props = defineProps({
    restaurant: {
        type: Object as PropType<RestaurantResult>,
        required: true,
    },
});

const { restaurant } = toRefs(props);

// Process to providing for the photo url from google API
const photoUrl = computed(() => {
    const place = { ...restaurant.value };
    if (place && place.photos && place.photos.length > 0) {
        const photoReference = place.photos[0].photo_reference;
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${
            import.meta.env.VITE_GOOGLE_MAP_API_KEY_SERVICE
        }`;
    } else {
        return './src/assets/images/place-photo-temp.jpg';
    }
});

// Handle click with emit to home component
const emits = defineEmits(['click']);
const handleClick = (location: object) => {
    emits('click', location);
};
</script>
