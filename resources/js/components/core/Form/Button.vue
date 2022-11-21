<template>
    <button
        @click="doClick"
        :class="{
            'loading': isLoading,
            btnClass: true
        }"
        class="btn btn-primary"
        :type="submit ? 'submit' : 'button'"
    >
        <slot v-if="! isLoading"/>
        <Spinner
            v-if="isLoading"
            :type="type"
        />
    </button>
</template>

<script>
import Spinner from '../Utilities/Spinner.vue';

export default {
    components: { Spinner },
    props: {
        loading: {
            required: false,
            default: false,
            type: Boolean
        },
        type: {
            required: false,
            default: 'primary',
            type: String
        },
        submit: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: null,
        }
    },
    computed: {
        isLoading() {
            return this.loading
        },
        btnClass() {
            return `btn-${this.type}`
        }
    },
    methods: {
        doClick() {
            if (! this.to) {
                this.$emit('click')
            } else {
                this.$inertia.visit(this.to)
            }
        }
    }
}
</script>

<style lang="postcss" scoped>

.btn {
    @apply
        py-2 px-6
        rounded-md
        text-lg;

    &:hover {
        @apply bg-primary;
    }

    &:focus {
        outline-style: solid;
        outline-color: var(--color-highlight);
        outline-width: thin;
    }

    &.loading {
        @apply
            bg-transparent
            border
            border-2
            border-primary;
    }

    /* Colour Variations */
    &.btn-primary {
        @apply bg-light-primary text-secondary;
    }
}

</style>
