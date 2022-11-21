<template>
    <div
        class="
            border
            rounded-xl
        "
    >
        <div class="flex flex-col">
            <Link
                class="
                    p-5
                    border-b
                    last:border-b-0
                    first:rounded-t-xl
                    last:rounded-b-xl
                    hover:bg-gray-100
                "
                method="get"
                as="button"
                :href="`${$props.to}/${item.id}`"
                v-for="item in data"
                :key="`item-${item.id}`"
            >
                <slot name="item" :item="item"/>
            </Link>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'

export default {
    props: {
        data: {
            type: Array,
            required: true,
            default: () => []
        },
        to: {
            type: String,
            required: true,
        }
    },
    components: { Link }
}
</script>
