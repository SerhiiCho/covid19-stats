import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/covid19-stats',

    plugins: [vue()],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
