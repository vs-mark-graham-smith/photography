<template>
    <div class="
        bg-gray-100
        px-8
        py-6
        border-0
        border-b
    ">
        <div class="flex flex-row">
            <div class="flex flex-col flex-grow">
                <h1 class="text-4xl">
                    <slot name="title"/>
                </h1>
                <small
                    v-if="search"
                    class="text-gray-400"
                >Showing x of x</small>
            </div>
            <div>
                <Button
                    v-if="create && $slots.create"
                    :to="create"
                    class="align-end"
                >
                    <slot name="create"/>
                </Button>
            </div>

        </div>
        <TextInput
            v-if="search"
            name="fetch_many_search"
            class="align-center mt-5 mb-2"
            placeholder="Search..."
            @input="input => $emit('fetchMany', input)"
        />
    </div>
</template>

<script>

export default {
    props: {
        search: {
            required: true,
            type: Boolean,
            default: false
        },
        create: {
            type: String,
            required: false,
            default: null,
        }
    }
}

</script>
