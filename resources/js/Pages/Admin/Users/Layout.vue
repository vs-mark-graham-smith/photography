<template>
    <div class="col-span-12 md:col-span-10 overflow-scroll">
        <slot/>
    </div>
</template>

<script>

import userModule from '../../../store/admin/users'

export default {
    beforeMount() {
        this.$store.dispatch('setSelectedNav', 'users')
        this.$store.registerModule('users', userModule)
    },
    beforeDestroy() {
        this.$store.unregisterModule('users', userModule)
    }
}
</script>
