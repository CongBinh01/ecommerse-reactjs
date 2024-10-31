import { lazy } from 'react';

const routers = [
    {
        path: '/',
        //Ham lazy load xu ly bat dong bo trong Component
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    },
]

export default routers;