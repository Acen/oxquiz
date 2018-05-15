// Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Element
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

// Components
import Heading from './components/Heading';

// CSS
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'

// Vue Use
Vue.use(VueRouter);
Vue.use(Element, { locale });

// Vuex & Vue-Router implementation
import store from './store';
import router from './router';

// Vue Init
const app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        Heading,
    },
});
