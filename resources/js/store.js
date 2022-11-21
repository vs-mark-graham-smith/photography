import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedNav: null,
    },
    getters: {
        selectedNav: state => state.selectedNav
    },
    mutations: {
        setSelectedNav(state, identifier) {
            state.selectedNav = identifier
        }
    },
    actions: {
        setSelectedNav({ commit }, identifier) {
            commit('setSelectedNav', identifier)
        }
    },
    modules: {}
})
