import 'vuetify/styles'
// import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css'

export default defineNuxtPlugin((app) => {
    const v = createVuetify({
        ssr: true,
        components,
        directives,
        display: {
            mobileBreakpoint: 'md'
        },
        
        theme: {
            defaultTheme: 'light',
            themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#673ab7",
                    background: '#f6f9fc'
                },
            },
            dark: {
                dark: true,
                colors: {
                primary: "#FFCA28",
                },
            },
            }
        }
        // defaults: useDefaults()
    })
    
    app.vueApp.use(v)
})