<template>
    <div
        class="
            pl-16
            py-2
            cursor-pointer
        "
        :class="{
            'bg-gray-300': $props.selected,
            'hover:bg-gray-200': ! $props.selected,
        }"
        @click="$inertia.visit($props.to)"
    >
        <fa-icon class="mr-2 text-lg" :icon="$props.icon"/>
        <slot />
    </div>
</template>

<script>

export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }
}
</script>
