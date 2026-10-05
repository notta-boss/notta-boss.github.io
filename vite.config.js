import { blog } from './src/services/blog.js';
import { work } from './src/services/work.js';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [tailwindcss(), vue(), {
        apply: 'build',
        name: '404',

        closeBundle() {
            const dist = path.resolve(__dirname, 'dist');

            fs.copyFileSync(
                path.join(dist, 'index.html'),
                path.join(dist, '404.html'),
            );

            const buffer = fs.readFileSync(path.join(dist, 'index.html'));
            const payload = new JSDOM(buffer.toString());

            const pages = [
                ...blog.map(article => ({ description: article.excerpt, image: `https://nottaboss.co.nz/${article.path.substring(1)}/og-image.png`, path: article.path, title: article.title })),
                ...work.map(project => ({ description: project.summary, image: 'https://nottaboss.co.nz/og-image.png', path: project.path, title: project.title })),
            ];

            for (const page of pages) {
                const description = payload.window.document.querySelector('meta[name="description"]');
                const image = payload.window.document.querySelector('meta[property="og:image"]');
                const title = payload.window.document.querySelector('meta[property="og:title"]');

                description.setAttribute('content', page.description);
                image.setAttribute('content', page.image);
                title.setAttribute('content', page.title);

                fs.mkdirSync(path.join(dist, page.path), { recursive: true });
                fs.writeFileSync(path.join(dist, page.path, 'index.html'), payload.serialize());
            }
        }
    }],
});
