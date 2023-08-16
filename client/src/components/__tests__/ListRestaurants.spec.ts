import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ListRestaurants from '../ListRestaurants.vue';

describe('ListRestaurents.vue', () => {
    // Mock Data
    const restaurant = {
        name: 'Restaurant Name',
        formatted_address: 'Restaurant Address',
        geometry: {
            location: { lat: 1111, lng: 2222 },
        },
        photos: [],
    };
    // Mount
    const wrapper = mount(ListRestaurants, {
        props: {
            restaurant,
        },
    });

    it('renders props data restaurant', () => {
        expect(wrapper.html()).toContain(restaurant.name);
        expect(wrapper.html()).toContain(restaurant.formatted_address);
    });

    it('should compute photoUrl correctly when restaurant has no photos', async () => {
        const photoUrlElement = await wrapper.find('[data-testid="photo-url"]');
        expect(photoUrlElement.attributes('src')).toBe(
            './src/assets/images/place-photo-temp.jpg'
        );
    });

    it('Click the restaurnat to show location', async () => {
        await wrapper.find('[data-testid="list-restaurant"]').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('click');
        expect(wrapper.emitted('click')).not.toBe('');
    });
});
