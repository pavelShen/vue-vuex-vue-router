import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
  history: true,
  hashbang:false
});

router.map({
    '/': {
        name:'basic',
        component: function (resolve) {
          require(['./components/Father1.vue'], resolve)
        }
    },
    '/father1Page': {
        name:'father1',
        component: function (resolve) {
          require(['./components/Father1.vue'], resolve)
        }
    },
    '/father2Page': {
        name:'father2',
        component: function (resolve) {
          require(['./components/Father2.vue'], resolve)
        }
    }
});

export default router;