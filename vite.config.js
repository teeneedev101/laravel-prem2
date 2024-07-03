import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';




export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/app.js",
                "resources/css/app.css",
                "resources/admin/css/app.css",
                "resources/admin/js/app.js",
                "resources/css/glide.css",
                "resources/js/glide.js",
                "resources/js/Sortable.js",
                "resources/js/tinymce.js",
                "resources/sass/app.scss",
                "resources/admin/sass/app.scss",
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
});
