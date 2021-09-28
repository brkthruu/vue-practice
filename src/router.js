import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Counter',
        component: () => import('@/components/counterApp/Counter'),
    },
    {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/components/chartApp/Chart'),
    },
    {
        path: '/chart2',
        name: 'ChartTwo',
        component: () => import('@/components/chartApp/ChartTwo'),
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});