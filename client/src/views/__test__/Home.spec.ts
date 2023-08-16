import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Home from '../Home.vue';

describe('Home.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(Home, {
            global: {
                stubs: {
                    Header: true, // Stub the Header component
                    GoogleMap: true, // Stub the GoogleMap component
                    ListRestaurants: true, // Stub the ListRestaurants component
                    MarkerCluster: true, // Stub the MarkerCluster component
                    Marker: true, // Stub the Marker component
                    InfoWindow: true, // Stub the InfoWindow component
                },
            },
        });

        expect(wrapper.exists()).toBe(true);
    });
});
