import PageHome from '@/components/PageHome';
import PageThreadShow from '@/components/PageThreadShow';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
});

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount('#app');
