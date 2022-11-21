<template>
    <input
        @input="$emit('input', $event.target.value)"
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="
            w-full
            h-10
            rounded-md
            border border-gray-300
            font-medium
            p-3

            focus:outline-style: solid;
            focus:outline-color: var(--color-highlight);
            focus:outline-width: thin;
        "
        :class="{ 'invalid': isInvalid }"
    >
</template>

<script>
    export default {
        props: {
            name: {
                required: true,
                type: String,
            },
            placeholder: {
                required: false,
                type: String,
                default: ''
            },
            type: {
                required: false,
                type: String,
                default: 'text'
            },
            invalid: {
                required: false,
                type: Boolean,
                default: false
            },
            errorBag: {
                required: false,
                type: Array,
                default: () => []
            }
        },
        computed: {
            isInvalid() {
                return false
            }
        }
    }
</script>

<style lang="postcss" scoped>

.invalid {
    @apply border-red-400;
}

</style>
