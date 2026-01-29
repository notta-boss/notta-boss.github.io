import { blog } from './blog.js';

const mapping = {
    'introducing-notta-socket-the-real-time-engine-we-always-wanted': import('../views/blog/IntroducingNottaSocketTheRealTimeEngineWeAlwaysWanted.vue'),
};

export const articles = blog.map(article => ({
    ...article,

    component: mapping[article.path.split('/').pop()],
}));
