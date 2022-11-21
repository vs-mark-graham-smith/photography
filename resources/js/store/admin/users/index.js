import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

export default {
    namespaced: true,

    state: () => ({
        data: [],
        pagination: {
            currentPage: 1,
            lastPage: 1,
        },
        loading: false,
        saving: false,
    }),
    actions,
    mutations,
    getters,
}
