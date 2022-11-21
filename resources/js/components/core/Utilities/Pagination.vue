<template>
    <div
        id="pagination-container"
        class="flex flex-row border w-fit rounded mt-4"
    >
        <button
            class="rounded-l"
            :disabled="Boolean($props.page === 1)"
            @click="setPage(1)"
        >
            <fa-icon icon="angles-left"/>
        </button>
        <button
            :disabled="Boolean($props.page === 1)"
            @click="setPage(page - 1)"
        >
            <fa-icon icon="angle-left"/>
        </button>
        <button
            v-for="number in beforeNumbers"
            :key="`before-number-${number}`"
            @click="setPage(number)"
        >
            {{ number }}
        </button>
        <div class="bg-highlight">
            {{ page }}
        </div>
        <button
            v-for="number in afterNumbers"
            :key="`after-number-${number}`"
            @click="setPage(number)"
        >
            {{ number }}
        </button>
        <button @click="setPage(page + 1)" :disabled="Boolean(page === lastPage)">
            <fa-icon icon="angle-right"/>
        </button>
        <button class="rounded-r" @click="setPage(lastPage)" :disabled="Boolean(page === lastPage)">
            <fa-icon icon="angles-right"/>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Number,
            required: true
        },
        lastPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        beforeNumbers() {
            let beforeNumbers = [];

            if (this.page === 1) return beforeNumbers

            let lengthOfAfterNumbers = this.afterNumbers.length;

            let possibleLength = 3 - lengthOfAfterNumbers;

            for (let i = 1; i <= possibleLength; i++) {
                if (this.page - i > 0) {
                    beforeNumbers = [
                        this.page - i,
                        ...beforeNumbers
                    ]
                }

                console.log({ beforeNumbers })
            }

            return beforeNumbers
        },

        afterNumbers() {
            let afterNumbers = [];

            let limit = 3;
            if (this.page === 1) {
                limit = 4
            }

            for (let i = 1; i < limit; i++) {
                let pageToPush = i + this.page

                if (pageToPush <= this.lastPage) {
                    afterNumbers.push(i + this.page)
                }
            }

            return afterNumbers;
        }
    },
    methods: {
        setPage(number) {
            console.log({ page: this.page, number })
            this.$emit('update', number)
        }
    }
}
</script>

<style lang="postcss" scoped>
    #pagination-container {
        button {
            @apply p-2 px-4;

            &:hover {
                @apply hover:bg-gray-200;
            }
        }

        div {
            @apply p-2 px-4;
        }
    }
</style>
