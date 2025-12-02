import Page from '../layouts/Page.vue';

import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';

export default [
    {
        component: Page,
        path: '/',

        children: [
            {
                component: Home,
                path: '',
            },

            {
                component: About,
                path: '/about',
            },

            {
                component: Contact,
                path: '/contact',
            },

            {
                component: Services,
                path: '/services',
            }
        ],
    }
];
