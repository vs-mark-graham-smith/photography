<template>
    <Layout>
        <Form @submit="doLogin()">
            <FormGroup
                label="Email"
                for="email"
            >
                <TextInput
                    name="email"
                    v-model="email"
                />
            </FormGroup>

            <FormGroup
                label="Password"
                for="password"
            >
                <TextInput
                    name="password"
                    type="password"
                    v-model="password"
                />
            </FormGroup>

            <Button
                submit
                :loading="loading"
            >Login</Button>
        </Form>
    </Layout>
</template>

<script>

import axios from 'axios'

export default {
    data: () => ({
        email: null,
        password: null,
        loading: false,
    }),
    methods: {
        doLogin () {
            this.loading = true;
            axios.post(`/auth/${ this.$page['props']['guard'] }/login`, {
                email: this.email,
                password: this.password
            }).then(response => {
                if (
                    typeof response.data === 'object'
                    && Object.keys(response.data).includes('guard')
                ) {
                    window.location.href = `/${response.data.guard}/dashboard`
                }
            }).catch(exception => {
                /**
                 * Process the errors that are returned here.
                 */
                this.loading = false
            })
        }
    }
}
</script>
