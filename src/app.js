import './style.css';

import { createApp } from 'vue';
import { router } from './services';
import App from './App.vue';

document
    .body
    .insertAdjacentHTML('beforeend', `<div class="min-h-dvh" id="app" />`);

createApp(App)
    .use(router)
    .mount('#app');
