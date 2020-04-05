import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WhatToDo from '../views/WhatToDo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/what-to-do',
        component: WhatToDo,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes
})

// @ts-ignore
router.afterEach((to, from) => Event.$emit('new-view'))

export default router
