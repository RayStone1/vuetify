import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import "@mdi/font/css/materialdesignicons.min.css"

Vue.use(Vuetify)

const vuetify=new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3272C0',
                secondary: '#A9C6F4',
                accent: '#b71c1c',
                error: '#dc5a63',
                info: '#b71c1c',
                success: '#b71c1c',
                warning: '#b71c1c',
                aqua:'#60DBE8',
                violet:'#8675EF'
            },
        },
    },
})
export default vuetify

