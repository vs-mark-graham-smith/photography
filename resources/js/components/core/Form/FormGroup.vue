<template>
    <div class="w-full mb-4 flex flex-col">
        <label
            class="mb-2"
            :for="$props.for"
        >{{ $props.label }}</label>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        for: {
            type: String,
            required: true
        }
    }
}
</script>
