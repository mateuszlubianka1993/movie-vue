import Vue from 'vue'
import VueRouter from 'vue-router';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { routes } from './routes';

import App from './App.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')