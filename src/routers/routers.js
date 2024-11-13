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
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    },
]

export default routers;