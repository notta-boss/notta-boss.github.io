import { articles, work } from '../services';

import Page from '../layouts/Page.vue';

import About from '../views/About.vue';
import Article from '../components/Article.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Index from '../views/blog/Index.vue';
import Services from '../views/Services.vue';
import Show from '../views/work/Show.vue';
import Work from '../views/Work.vue';
import WorkIndex from '../views/work/Index.vue';

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
                component: Work,
                path: '/work',

                children: [
                    {
                        component: WorkIndex,
                        path: '',
                    },

                    {
                        component: Show,
                        path: ':slug',
                        props: route => work.find(project => project.path.endsWith(route.params.slug)),
                    },
                ],
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
                        component: Article,
                        path: ':slug',
                        props: route => articles.find(article => article.path.endsWith(route.params.slug)),
                    },
                ],
            },
        ],
    }
];
