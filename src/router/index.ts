import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import WhatToDo from '@/views/WhatToDo.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/what-to-do',
        component: WhatToDo,
        name: 'what-to-do',
    },
    {
        path: '/:catchAll(.*)',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
})

export default router
