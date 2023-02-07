const mix = require('laravel-mix')
require('vuetifyjs-mix-extension')


mix.js('resources/assets/js/app.js', 'public/js')
    .vuetify('vuetify-loader')
    .vue()
   .sass('resources/assets/sass/app.scss', 'public/css');
