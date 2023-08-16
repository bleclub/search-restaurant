import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Counter from '../Counter.vue';

describe('Counter', () => {
    const wrapper = mount(Counter);
    it('should render correctly', () => {
        expect(wrapper.html()).toContain('Current count: 0');
    });

    it('should increment correctly', async () => {
        await wrapper.find('button.increment').trigger('click');
        expect(wrapper.html()).toContain('Current count: 1');
    });

    it('should decrement correctly', async () => {
        await wrapper.find('button.decrement').trigger('click');
        expect(wrapper.html()).toContain('Current count: 0');
    });
});
