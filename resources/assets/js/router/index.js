import VueRouter from "vue-router";
import Search from '../components/page/Search';
import Create from '../components/page/Create';
import Login from '../components/page/Login';
import Register from '../components/page/Register';


export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Search, name: 'search' },
        { path: '/create', component: Create, name: 'create' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/register', component: Register, name: 'register' },
    ],
});