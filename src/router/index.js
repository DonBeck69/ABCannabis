import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Oil from '@/components/Oil';
import Contact from '@/components/Contact';
import Products from '@/components/Products';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/oil',
      name: 'oil',
      component: Oil
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});
