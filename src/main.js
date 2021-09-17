import '@babel/polyfill';
import 'eligrey-classlist-js-polyfill';
import 'canvg';
import './assets/scss/all.scss';
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import routes from './routes/root-router';
import VueApexCharts from 'vue-apexcharts';
import 'jquery'
import 'bootstrap'
// global register
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts)

const router = new VueRouter({
    routes // routes: routes
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    },
    router
})