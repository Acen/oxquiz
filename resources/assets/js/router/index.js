import VueRouter from "vue-router";
import Search from '../components/page/Search';
import About from '../components/page/About';
import Profile from '../components/page/Profile';
import Login from '../components/page/Login';
import Register from '../components/page/Register';

export default new VueRouter({
    mode  : 'history',
    routes: [
        {path: '/', component: Search, name: 'search'},
        {path: '/profile', component: Profile, name: 'profile'},
        {path: '/login', component: Login, name: 'login'},
        {path: '/register', component: Register, name: 'register'},
        {path: '/about', component: About, name: 'about'},
    ],
});