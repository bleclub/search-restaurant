<template>
    <div
        class="flex h-36 max-w-screen-sm cursor-pointer items-center justify-between border-b bg-slate-50 px-4 py-4 hover:bg-gray-100"
        @click="handleClick(restaurant.geometry.location)"
        data-testid="list-restaurant"
    >
        <div class="w-[70%] pr-3">
            <h5
                class="text-md text-tm_blue mb-2 text-[1rem] font-medium leading-none"
            >
                {{ restaurant.name }}
            </h5>
            <p class="mb-4 text-sm font-normal leading-4 text-tm_drakblue">
                {{ restaurant.formatted_address }}
            </p>
            <p
                class="text-[.8rem]"
                :class="
                    !restaurant?.opening_hours?.open_now
                        ? 'text-red-600'
                        : 'text-green-600'
                "
            >
                {{
                    !restaurant?.opening_hours?.open_now
                        ? 'Close now'
                        : 'Open now'
                }}
            </p>
        </div>

        <div
            class="relative w-[84px] overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light"
        >
            <img
                class="h-[84px] w-[84px] rounded-md object-cover"
                :src="photoUrl"
                :alt="restaurant.name"
                data-testid="photo-url"
            />

            <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            ></div>
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
