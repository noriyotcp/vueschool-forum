import sourceData from '@/data.json';
import Forum from '@/pages/Forum';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import ThreadShow from '@/pages/ThreadShow';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
      if (threadExists) {
        return next();
      } else {
        next({
          name: 'NotFound',
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash
        });
      }
    }
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

export default createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
});
