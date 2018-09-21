import VueRouter from "vue-router";
import Search from '../components/page/Search';
import Create from '../components/page/Create';

import Profile from '../components/page/Profile';
import Login from '../components/page/Login';
import Register from '../components/page/Register';


export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Search, name: 'search' },
        { path: '/create', component: Create, name: 'create' },
        { path: '/profile', component: Profile, name: 'profile' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/register', component: Register, name: 'register' },
    ],
});