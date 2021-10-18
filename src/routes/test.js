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
}, {
    path: '/contacts',
    component: () => import('../components/pages/contacts.vue'),
    meta: {
        title: '聯絡方式'
    }
}, {
    path: '/login',
    component: () => import('../components/pages/login.vue'),
    meta: {
        title: '登入頁面'
    }
}, {
    path: '/register',
    component: () => import('../components/pages/register.vue'),
    meta: {
        title: '註冊頁面'
    }
}, {
    path: '/relogin',
    component: () => import('../components/pages/relogin.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
}, {
    path: '/reset',
    component: () => import('../components/pages/reset.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
}




];


export default testRoutes;