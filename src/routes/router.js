let testRoutes = [{
    path: '/',
    name: "Dashboard",
    component: () => import('../components/pages/dashboard.vue'),
    meta: {
        title: 'dashboard',
        note: ''
    }
}, {
    path: '/mail',
    component: () => import('../components/pages/mail.vue'),
    meta: {
        title: '信箱',
        note: ''
    }
}, {
    path: '/calendar',
    component: () => import('../components/pages/calendar.vue'),
    meta: {
        title: '日曆',
        note: ''
    }
}, {
    path: '/bulletin',
    component: () => import('../components/pages/bulletin.vue'),
    meta: {
        title: '公佈欄',
        note: ''
    }
}, {
    path: '/contacts',
    component: () => import('../components/pages/contacts.vue'),
    meta: {
        title: '聯絡人清單',
        note: '找找好朋友'
    }
}, {
    path: '/login',
    component: () => import('../components/pages/login.vue'),
    meta: {
        title: '登入',
        note: ''
    }
}, {
    path: '/register',
    component: () => import('../components/pages/register.vue'),
    meta: {
        title: '註冊',
        note: ''
    }
}, {
    path: '/relogin',
    component: () => import('../components/pages/relogin.vue'),
    meta: {
        title: '忘記密碼',
        note: ''
    }
}, {
    path: '/reset',
    component: () => import('../components/pages/reset.vue'),
    meta: {
        title: '重設密碼',
        note: ''
    }
}, {
    path: '/403_error',
    component: () => import('../components/pages/403_error.vue'),
    meta: {
        title: '403錯誤',
        note: ''
    }
}, {
    path: '/404_error',
    component: () => import('../components/pages/404_error.vue'),
    meta: {
        title: '404錯誤',
        note: ''
    }
}, {
    path: '/500_error',
    component: () => import('../components/pages/500_error.vue'),
    meta: {
        title: '500錯誤',
        note: ''
    }
}, {
    path: '/503_error',
    component: () => import('../components/pages/503_error.vue'),
    meta: {
        title: '503錯誤',
        note: ''
    }
}, {
    path: '/alert',
    component: () => import('../components/pages/alert.vue'),
    meta: {
        title: '警告',
        note: '請注意!'
    }
}, {
    path: '/badges',
    component: () => import('../components/pages/badges.vue'),
    meta: {
        title: '標籤',
        note: ''
    }
}, {
    path: '/buttons',
    component: () => import('../components/pages/buttons.vue'),
    meta: {
        title: '按鈕',
        note: '盡量點'
    }
},  {
    path: '/cards',
    component: () => import('../components/pages/cards.vue'),
    meta: {
        title: '卡片',
        note: ''
    }
    
},  {
    path: '/context-menu',
    component: () => import('../components/pages/context-menu.vue'),
    meta: {
        title: '工具列目錄',
        note: ''
    }
    
},  {
    path: '/icons',
    component: () => import('../components/pages/icons.vue'),
    meta: {
        title: 'icons',
        note: ''
    }
    
},  {
    path: '/typography',
    component: () => import('../components/pages/typography.vue'),
    meta: {
        title: '排版',
        note: '同 BS'
    }
    
},  {
    path: '/flex-grid',
    component: () => import('../components/pages/flex-grid.vue'),
    meta: {
        title: '切版',
        note: '同 BS'
    }
    
},  {
    path: '/spinners',
    component: () => import('../components/pages/spinners.vue'),
    meta: {
        title: '旋轉特效',
        note: ''
    }
},  {
    path: '/accordians',
    component: () => import('../components/pages/accordians.vue'),
    meta: {
        title: '摺疊面板',
        note: ''
    }
},  {
    path: '/avatar',
    component: () => import('../components/pages/avatar.vue'),
    meta: {
        title: '頭像',
        note: ''
    }
},  {
    path: '/colors',
    component: () => import('../components/pages/colors.vue'),
    meta: {
        title: '顏色',
        note: ''
    }
},  {
    path: '/modals',
    component: () => import('../components/pages/modals.vue'),
    meta: {
        title: '互動視窗',
        note: ''
    }
},  {
    path: '/notifications',
    component: () => import('../components/pages/notifications.vue'),
    meta: {
        title: '通知',
        note: ''
    }
},  {
    path: '/tabs',
    component: () => import('../components/pages/tabs.vue'),
    meta: {
        title: '標籤',
        note: ''
    }
},  {
    path: '/timeline',
    component: () => import('../components/pages/timeline.vue'),
    meta: {
        title: '時程表',
        note: ''
    }
},  {
    path: '/tooltips',
    component: () => import('../components/pages/tooltips.vue'),
    meta: {
        title: '提示',
        note: ''
    }
},  {
    path: '/forms',
    component: () => import('../components/pages/forms.vue'),
    meta: {
        title: '表單排版',
        note: ''
    }
},  {
    path: '/validations',
    component: () => import('../components/pages/validations.vue'),
    meta: {
        title: '驗證',
        note: ''
    }
},  {
    path: '/pickers',
    component: () => import('../components/pages/pickers.vue'),
    meta: {
        title: '選擇器',
        note: ''
    }
},  {
    path: '/uploaders',
    component: () => import('../components/pages/uploaders.vue'),
    meta: {
        title: '互動視窗',
        note: ''
    }
},  {
    path: '/wysiwyg',
    component: () => import('../components/pages/wysiwyg.vue'),
    meta: {
        title: '編輯器',
        note: ''
    }
},  {
    path: '/tables',
    component: () => import('../components/pages/tables.vue'),
    meta: {
        title: '表格',
        note: ''
    }
},  {
    path: '/data-tables',
    component: () => import('../components/pages/data-tables.vue'),
    meta: {
        title: '報表',
        note: ''
    }
},  {
    path: '/apex-charts',
    component: () => import('../components/pages/apex-charts.vue'),
    meta: {
        title: 'ApexCharts',
        note: ''
    }
},  {
    path: '/chart-js',
    component: () => import('../components/pages/chart-js.vue'),
    meta: {
        title: 'Chart.js',
        note: ''
    }
},  {
    path: '/google-maps',
    component: () => import('../components/pages/google-maps.vue'),
    meta: {
        title: 'Google Maps',
        note: ''
    }
},  {
    path: '/vector-maps',
    component: () => import('../components/pages/vector-maps.vue'),
    meta: {
        title: 'Vector Maps',
        note: ''
    }
}




];


export default testRoutes;