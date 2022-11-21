<template>
    <div class="
        bg-gray-100
        pt-10
        col-span-12
        md:col-span-2
        border-0
        md:border-r
        overflow-scroll
    ">
        <slot />
    </div>
</template>

<style lang="postcss">
    div {
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>
