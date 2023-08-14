<template>
    <nav
        class="bg-tm_drakblue bg-banner-pattern bg-cover bg-bottom pb-20 pt-20 shadow-lg"
    >
        <div class="flex items-center justify-center">
            <h1 class="text-3xl uppercase text-white">Restaurant Finding</h1>
        </div>
        <!-- Search Block -->
        <form @submit.prevent>
            <div
                class="mx-auto mt-5 flex w-full max-w-screen-sm items-center justify-center px-5"
            >
                <input
                    type="text"
                    class="w-full flex-1 rounded-bl-md rounded-tl-md border-none focus:shadow-lg focus:outline-none focus:ring-0"
                    placeholder="Search for any location"
                    v-model="searchQuery"
                />
                <button @click="handleSearch" type="submit">
                    <i
                        class="flex-2 fa-solid fa-chevron-right cursor-pointer rounded-br-md rounded-tr-md bg-black px-4 py-3 text-white hover:shadow-lg"
                    ></i>
                </button>
            </div>
        </form>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref<string>('บางซื่อ');

const emits = defineEmits(['submit']);

// Handle Search
const handleSearch = () => {
    if (searchQuery.value !== '') {
        emits('submit', searchQuery.value);
        searchQuery.value = '';
    }
};
</script>
