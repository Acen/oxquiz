import VueRouter from "vue-router";
import Search from '../components/page/Search';
import Create from '../components/page/Create';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Search, name: 'search' },
        { path: '/create', component: Create, name: 'create' }
    ],
});