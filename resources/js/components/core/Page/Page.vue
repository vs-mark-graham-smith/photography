<template>
    <div>
        <PageHeader
            @fetchMany="setSearchInput"
            :search="search"
            :create="create"
        >
            <template v-slot:title>
                <slot name="title"/>
            </template>
            <template v-slot:filters>
                <slot name="filters"/>
            </template>
            <template v-slot:create>
                <slot name="create"/>
            </template>
        </PageHeader>

        <Container>
            <slot />
            <Pagination
                v-if="paginated"
                :page="pagination.currentPage"
                :last-page="pagination.lastPage"
                @update="setPage"
            />
        </Container>
    </div>
</template>

<script>
import Container from '../Template/Container.vue'
import PageHeader from './PageHeader.vue'
import Pagination from '../Utilities/Pagination.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        Container,
        PageHeader,
        Pagination
    },
    props: {
        search: {
            type: Boolean,
            default: false
        },
        paginated: {
            type: Boolean,
            default: false
        },
        module: {
            type: String,
            required: false,
            default: null
        },
        create: {
            type: String,
            required: false,
            default: null,
        }
    },
    data: () => ({
        searchInput: null,
        page: 1
    }),
    beforeCreate() {
        this.$options.computed = {
            ...mapGetters(this.$options.propsData.module, [
                'pagination'
            ])
        }
    },
    methods: {
        setSearchInput(searchInput) {
            this.searchInput = searchInput
            this.setPage(1)
        },

        setPage(page) {
            this.page = page
            this.fetchMany()
        },

        fetchMany() {
            if (this.module) this.$store.dispatch(`${this.module}/fetchMany`, {
                search: this.searchInput,
                page: this.page
            })
        }
    }
}
</script>
