let mix = require('laravel-mix');

mix.disableNotifications();

mix.sass('resources/assets/sass/app.scss', 'public/css')
   .js('resources/assets/js/app.js', 'public/js')
   .extract([
        'vue',
        'axios',
        'element-ui',
        'vuex',
        'vue-mc',
        'vue-router',
   ]);

if (mix.inProduction()) {
    mix.version();
}

