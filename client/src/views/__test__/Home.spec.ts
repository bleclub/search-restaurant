import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Home from '../Home.vue';

describe('Home.vue', () => {
    it('render all map component', async () => {
        const wrapper = mount(Home);

        const headerComponent = wrapper.find('[data-test="header"]');
        expect(headerComponent.exists()).toBe(true);

        // Find the GoogleMap component
        const googleMapComponent = wrapper.find('[data-test="google-map"]');
        expect(googleMapComponent.exists()).toBe(true);
    });
});
