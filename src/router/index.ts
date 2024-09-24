import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/MainPage.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutPage.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('@/views/ContactsPage.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('@/views/Error404Page.vue')
        }
    ]
})

export default router
