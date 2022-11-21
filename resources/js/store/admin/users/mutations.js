export default {
    /**
     * getData
     */
    fetchManyRequest(state) {
        state.loading = true
    },
    fetchManySuccess(state, { data, pagination }) {
        state.loading = false
        state.data = data
        state.pagination = pagination
    },
    fetchManyFailed(state, exception) {
        state.loading = false
    },

    /**
     * Save Data
     */
    saveRequest(state) {
        state.saving = true
    },
    saveRequestSuccess(state, response) {
        console.log({
            state,
            response
        })
        state.saving = false
    },
    saveRequestFailed(state, response) {
        console.log({
            state,
            response
        })
        state.saving = false
    },
}
