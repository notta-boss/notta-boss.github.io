import './style.css';

import { createApp } from 'vue';
import { createGtag } from 'vue-gtag';
import { router } from './services';
import App from './App.vue';

const gtag = createGtag({
    tagId: 'G-P14ELE0YJZ'
});

document
    .body
    .insertAdjacentHTML('beforeend', `<div class="min-h-dvh" id="app" />`);

createApp(App)
    .use(gtag)
    .use(router)
    .mount('#app');
