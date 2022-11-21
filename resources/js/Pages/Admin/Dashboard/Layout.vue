<template>
    <div class="col-span-12 md:col-span-10">
        <slot/>
    </div>
</template>

<script>

import dashboardModule from '../../../store/admin/dashboard'

export default {
    beforeMount() {
        this.$store.dispatch('setSelectedNav', 'dashboard')
        this.$store.registerModule('dashboard', dashboardModule)
    },
    beforeDestroy() {
        this.$store.unregisterModule('dashboard', dashboardModule)
    }
}
</script>
