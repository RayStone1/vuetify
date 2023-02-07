import Vue from 'vue'
//Vue-router
import router from "./router";
//Vuex
import store from "./store";
//Vuetify
import vuetify from './plugins/vuetify'

import App from "./App.vue";


const app=new Vue({
    router,
    store,
    vuetify,
    render: function (h) { return h(App) }
}).$mount('#app')
