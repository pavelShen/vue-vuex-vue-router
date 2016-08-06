import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Store from './vuex/store.js';

Vue.use(VueRouter);
Vue.use(VueResource);

import Father1 from './components/Father1.vue';
import Father2 from './components/Father2.vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';

let App = Vue.extend({
  Store
});

let router = new VueRouter({
  history: true,
  hashbang:false
});

router.map({
    '/': {
        name:'basic',
        component: Father1
    },
    '/father1Page': {
        name:'father1',
        component: Father1
    },
    '/father2Page': {
        name:'father2',
        component: Father2
    }
});

router.start(App, '#app');