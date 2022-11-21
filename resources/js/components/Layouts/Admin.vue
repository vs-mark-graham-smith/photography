<template>
    <Wrapper>
        <Header/>

        <div class="grid grid-cols-12 min-h-0 h-full">
            <SideBar>
                <SideBarGroup title="Dashboard">
                    <SideBarLink
                        icon="house"
                        :selected="navSelected('dashboard')"
                        to="/admin/dashboard"
                    >Dashboard</SideBarLink>
                </SideBarGroup>

                <SideBarGroup title="Schedule">
                    <SideBarLink
                        icon="calendar-days"
                        :selected="navSelected('events')"
                        to="/admin/events"
                    >Events</SideBarLink>
                    <SideBarLink
                        icon="book"
                        :selected="navSelected('bookings')"
                        to="/admin/bookings"
                    >Bookings</SideBarLink>
                </SideBarGroup>

                <SideBarGroup title="Gallery">
                    <SideBarLink
                        icon="images"
                        :selected="navSelected('gallery')"
                        to="/admin/gallery"
                    >Gallery</SideBarLink>
                </SideBarGroup>

                <SideBarGroup title="Users">
                    <SideBarLink
                        icon="user"
                        :selected="navSelected('users')"
                        to="/admin/users"
                    >Users</SideBarLink>
                    <SideBarLink
                        icon="receipt"
                        :selected="navSelected('invoices')"
                        to="/admin/invoices"
                    >Invoices</SideBarLink>
                </SideBarGroup>

                <SideBarGroup title="Admins">
                    <SideBarLink
                        icon="user-gear"
                        :selected="navSelected('admins')"
                        to="/admin/admins"
                    >Admins</SideBarLink>
                </SideBarGroup>
            </SideBar>

            <slot />
        </div>

    </Wrapper>
</template>

<script>

import Wrapper from '../core/Template/Wrapper.vue'
import Header from '../core/Header/Header.vue'
import SideBar from '../core/SideBar/SideBar.vue'
import SideBarGroup from '../core/SideBar/SideBarGroup.vue'
import SideBarLink from '../core/SideBar/SideBarLink.vue'

import { mapGetters } from 'vuex'

export default {
    components: {
        Wrapper,
        Header,
        SideBar,
        SideBarGroup,
        SideBarLink
    },
    computed: {
        ...mapGetters([ 'selectedNav' ])
    },
    methods: {
        navSelected(identifier) {
            return Boolean(
                identifier === this.selectedNav
            )
        }
    }
}
</script>
