import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
        host: true,
        port: 8000, // This is the port which we will use in docker
        watch: {
            usePolling: true,
        },
    },
});
