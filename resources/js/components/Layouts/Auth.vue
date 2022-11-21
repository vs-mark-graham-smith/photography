<template>
    <div class="background">
        <div class="form-container">
            <div class="layout-header">
                <img class="logo-img" src="../../../images/s_logo_cropped.jpg">
            </div>
            <div class="w-3/4">
                <hr class="line-break"/>
            </div>
            <div class="w-full p-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>

.background {
    @apply  bg-light-primary
            h-full w-full
            flex flex-col
            justify-center
            items-center;

    .layout-header {
        .logo-img {
            @apply object-scale-down mt-5 mb-5;
        }
    }

    .form-container {
        @apply  card
                w-1/3
                pt-3
                px-3
                flex flex-col
                items-center
                rounded-md;
    }
}

</style>
