import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhatToDo from '../views/WhatToDo.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/what-to-do',
        component: WhatToDo,
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

// router.afterEach((to, from) => Event.$emit('new-view'))

export default router
