let testRoutes = [{
    path: '/',
    name: "Dashboard",
    component: () => import('../components/pages/dashboard.vue'),
    meta: {
        title: 'dashboard'
    }
}, {
    path: '/mail',
    component: () => import('../components/pages/mail.vue'),
    meta: {
        title: '信箱'
    }
}, {
    path: '/calendar',
    component: () => import('../components/pages/calendar.vue'),
    meta: {
        title: '日曆'
    }
}, {
    path: '/bulletin',
    component: () => import('../components/pages/bulletin.vue'),
    meta: {
        title: '公佈欄'
    }
}



];


export default testRoutes;