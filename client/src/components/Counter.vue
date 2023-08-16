<template>
    <div class="flex h-screen flex-col items-center justify-center">
        <div class="mb-4 text-xl">Current count: {{ count }}</div>
        <div class="flex">
            <button
                @click="increment"
                class="increment mr-4 w-40 rounded bg-tm_drakblue p-2 text-white"
            >
                Increment
            </button>
            <button
                @click="decrement"
                class="decrement bg-tm_blue w-40 rounded p-2 text-white"
            >
                Decrement
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(0);

const increment = (): void => {
    count.value++;
};

const decrement = (): void => {
    count.value--;
};
</script>

<style scoped></style>
