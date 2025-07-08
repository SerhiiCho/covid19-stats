import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/covid19',

    plugins: [vue()],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
