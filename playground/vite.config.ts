import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss({
                    config: '../tailwind.config.js', // Path to your tailwind config
                }),
                autoprefixer,
            ],
        },
    },
});
