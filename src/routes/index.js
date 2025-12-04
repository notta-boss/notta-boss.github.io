import { articles } from '../services';

import Page from '../layouts/Page.vue';

import About from '../views/About.vue';
import Article from '../components/Article.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Index from '../views/blog/Index.vue';
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
            },

            {
                component: Blog,
                path: '/blog',

                children: [
                    {
                        component: Index,
                        path: '',
                    },

                    {
                        path: ':slug',
                        component: Article,
                        props: route => articles.find(article => article.path.includes(route.params.slug)),
                    },
                ],
            },
        ],
    }
];
