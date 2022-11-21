<template>
    <div class="mb-5">
        <span class="
            text-gray-600
            text-l
            font
            font-semibold
            tracking-wider
            uppercase
            pl-14
        ">
            {{ this.title }}
        </span>
        <div class="flex flex-col mt-2">
            <slot />
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}

</script>
