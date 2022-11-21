import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Vuex
import Vuex from 'vuex'

import store from './store.js'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHouse,
    faCalendarDays,
    faBook,
    faImages,
    faUser,
    faUserGear,
    faReceipt,

    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import components from './components.js'

import AuthLayout from './components/Layouts/Auth.vue'
import AdminLayout from './components/Layouts/Admin.vue'
import UserLayout from './components/Layouts/User.vue'


createInertiaApp({
    resolve: name => {
        const page = resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue'))

        let layout = null

        if (name.startsWith('Pages/Auth')) {
            layout = AuthLayout
        }

        if (layout) {
            page.then(module => {
                module.default.layout = layout
            })
        }

        return page
    },

    setup({ el, App, props, plugin }) {
        Vue.use(plugin)
        Vue.use(Vuex)

        library.add(faHouse)
        library.add(faCalendarDays)
        library.add(faBook)
        library.add(faImages)
        library.add(faUser)
        library.add(faUserGear)
        library.add(faReceipt)

        library.add(faAngleLeft)
        library.add(faAngleRight)
        library.add(faAnglesLeft)
        library.add(faAnglesRight)

        Vue.component('fa-icon', FontAwesomeIcon)

        Object.keys(components).forEach(component => {
            Vue.component(component, components[component])
        })

        new Vue({
            render: h => h(App, props),
            store
        }).$mount(el)
    }
})
