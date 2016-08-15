import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './vuex/store.js';
import router from './router.js';

Vue.use(VueResource);

let App = Vue.extend({
  store:store
});

router.start(App, '#app');
