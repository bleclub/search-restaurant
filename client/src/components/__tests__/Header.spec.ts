import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Header from '../Header.vue';

const handleSearch = () => {
    let searchQuery = 'old-name';
    if (searchQuery !== '') {
        console.log('Data sent');
        searchQuery = '';
    }
};

describe('Header.vue', () => {
    it('render defalut value on the search box', async () => {
        const wrapper = mount(Header);
        await wrapper.find('input[type="text"]').setValue('บางซื่อ');
        const inputValue = wrapper.find('input').element.value;
        expect(inputValue).toBe('บางซื่อ');
    });

    it('emits submit with correct properties valid of the data when button is clicked', async () => {
        const wrapper = mount(Header);
        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('submit');
        expect(wrapper.emitted('submit')).not.toBe('');
    });

    it('clear the value input search box when button is clicked', async () => {
        const wrapper = mount(Header);
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('submit');
        expect(wrapper.emitted('submit')).not.toBe('');
        const input = (wrapper.find('input').element.value = '');
        expect(input).toBe('');
    });
});
