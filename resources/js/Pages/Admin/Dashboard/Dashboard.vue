<template>
    <Page>
        <template v-slot:title>
            Dashboard
        </template>

        <template v-slot:filters>

        </template>

        <button @click="toggleLoading">click</button>
    </Page>
</template>

<script>

import SiteLayout from '../../../components/Layouts/Admin.vue'
import Layout from './Layout.vue'

import { mapActions } from 'vuex'

export default {
    layout: (h, page) => {
        return h(SiteLayout, [
            h(Layout, [page]),
        ])
    },
    methods: {
        ...mapActions('dashboard', [ 'toggleLoading' ]),
    }
}
</script>
