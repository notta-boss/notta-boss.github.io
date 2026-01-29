import { blog } from './src/services/blog.js';
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

            for (const article of blog) {
                const description = payload.window.document.querySelector('meta[name="description"]');
                const image = payload.window.document.querySelector('meta[property="og:image"]');
                const title = payload.window.document.querySelector('meta[property="og:title"]');

                description.setAttribute('content', article.excerpt);
                image.setAttribute('content', `https://nottaboss.co.nz/${article.path.substring(1)}/og-image.png`);
                title.setAttribute('content', article.title);

                fs.writeFileSync(path.join(dist, article.path, 'index.html'), payload.serialize());
            }
        }
    }],
});
