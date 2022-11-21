<template>
    <Page
        module="users"
        search
        paginated
        create="/admin/users/upsert"
    >
        <template v-slot:title>
            Users
        </template>

        <template v-slot:filters>

        </template>

        <template v-slot:create>
            Create User
        </template>

        <ResourceList :data="data" to="/admin/users/upsert">
            <template v-slot:item="{ item }">
                <div class="flex flex-row">
                    <h2 class="text-xl mr-2">#{{ item.id }}</h2>
                    <div class="flex flex-col flex-grow text-left">
                        <p class="
                            text-xl
                            hover:underline
                            cursor-pointer
                        ">{{ item.first_name }} {{ item.surname }}</p>
                        <small class="text-gray-400">{{ item.email }}</small>
                    </div>
                    <FriendlyDate :date="item.created_at"/>
                </div>
            </template>
        </ResourceList>
    </Page>
</template>

<script>

import SiteLayout from '../../../components/Layouts/Admin.vue'
import Layout from './Layout.vue'
import { Link } from '@inertiajs/inertia-vue'

import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    components: { Link },
    layout: (h, page) => {
        return h(SiteLayout, [
            h(Layout, [page]),
        ])
    },
    mounted() {
        this.fetchMany({})
    },
    computed: {
        ...mapGetters('users', [ 'data', 'loading' ]),
    },
    methods: {
        ...mapActions('users', [ 'fetchMany' ]),
    }
}
</script>
