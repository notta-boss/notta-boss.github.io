import { blog } from './blog.js';

import IntroducingNottaSocketTheRealTimeEngineWeAlwaysWanted from '../views/blog/IntroducingNottaSocketTheRealTimeEngineWeAlwaysWanted.vue';

const mapping = {
    'introducing-notta-socket-the-real-time-engine-we-always-wanted': IntroducingNottaSocketTheRealTimeEngineWeAlwaysWanted,
};

export const articles = blog.map(article => ({
    ...article,

    component: mapping[article.path.split('/').pop()],
}));
