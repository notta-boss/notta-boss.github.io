import fs from 'fs';
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
        }
    }],
});
