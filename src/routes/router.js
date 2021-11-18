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
}, {
    path: '/403_error',
    component: () => import('../components/pages/403_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
}, {
    path: '/404_error',
    component: () => import('../components/pages/404_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
}, {
    path: '/500_error',
    component: () => import('../components/pages/500_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
}, {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
}, {
    path: '/alert',
    component: () => import('../components/pages/alert.vue'),
    meta: {
        title: '警告'
    }
}, {
    path: '/badges',
    component: () => import('../components/pages/badges.vue'),
    meta: {
        title: '標籤'
    }
}, {
    path: '/buttons',
    component: () => import('../components/pages/buttons.vue'),
    meta: {
        title: '按鈕'
    }
},  {
    path: '/cards',
    component: () => import('../components/pages/cards.vue'),
    meta: {
        title: '卡片'
    }
    
},  {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
    
},  {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
    
},  {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
    
},  {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
    
},  {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '忘記密碼頁面'
    }
    
}




];


export default testRoutes;