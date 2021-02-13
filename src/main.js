import router from '@/router';
import { createApp } from 'vue';
import App from './App.vue';

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount('#app');
