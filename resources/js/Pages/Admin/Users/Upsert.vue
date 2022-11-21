<template>
    <Page module="users">
        <template v-slot:title>
            {{ user.id ? 'Update ' : 'Create ' }} User
        </template>

        <Form @submit="doUpsert()">
            <Card>
                <CardHeader>
                    <template v-slot:header>Personal Details</template>
                </CardHeader>
                <FormGroup
                    label="First Name"
                    for="first_name"
                >
                    <TextInput
                        name="first_name"
                        v-model="user.first_name"
                    />
                </FormGroup>
                <FormGroup
                    label="Surname"
                    for="surname"
                >
                    <TextInput
                        name="surname"
                        v-model="user.surname"
                    />
                </FormGroup>
                <FormGroup
                    label="Email"
                    for="email"
                >
                    <TextInput
                        name="email"
                        v-model="user.email"
                    />
                </FormGroup>
            </Card>

            <Card>
                <CardHeader>
                    <template v-slot:header>Security</template>
                </CardHeader>

                <FormGroup
                    label="Password"
                    for="password"
                >
                    <TextInput
                        name="password"
                        v-model="user.password"
                    />
                </FormGroup>
                <FormGroup
                    label="Password Confirmation"
                    for="password_confirmation"
                >
                    <TextInput
                        name="password_confirmation"
                        v-model="user.password_confirmation"
                    />
                </FormGroup>
            </Card>

            <Button
                class="mt-2"
                submit
                :loading="isSaving"
            >Save</Button>
        </Form>
    </Page>
</template>

<script>

import SiteLayout from '../../../components/Layouts/Admin.vue'
import Layout from './Layout.vue'

import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    layout: (h, page) => {
        return h(SiteLayout, [
            h(Layout, [page]),
        ])
    },
    data: () => ({
        user: {
            id: null,
            first_name: null,
            surname: null,
            email: null
        }
    }),
    computed: {
        ...mapGetters('users', [ 'isSaving' ]),
    },
    methods: {
        ...mapActions('users', [ 'save' ]),

        doUpsert() {
            this.save(this.user)
        }
    },
    beforeMount() {
        if (this.$inertia.page.props.user) {
            this.user = {
                ...this.$inertia.page.props.user,
                password: null,
                password_confirmation: null
            }
        }
    }
}
</script>
