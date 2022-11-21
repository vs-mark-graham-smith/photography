<template>
    <span>
        {{ formattedDate }}
    </span>
</template>

<script>

import momentMixin from '../../../mixins/momentMixin'

export default {
    mixins: [ momentMixin ],
    props: {
        date: {
            type: String,
            required: true,
        }
    },
    computed: {
        formattedDate() {
            return this.moment(this.date).fromNow()
        }
    }
}
</script>
