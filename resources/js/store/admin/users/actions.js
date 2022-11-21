import axios from "axios"

export default {
    fetchMany({ commit }, { search = null, page = 1, filters = {} }) {
        commit('fetchManyRequest')

        axios.post(`/admin/users/?page=${ page }`, {
            search,
            filters
        }).then(response => {
            commit('fetchManySuccess', {
                data: response.data.data,
                pagination: {
                    currentPage: response.data.current_page,
                    lastPage: response.data.last_page
                }
            })
        }).catch(exception => {
            commit('fetchManyFailed')
        })
    },
    save({ commit }, user) {
        const path = '/admin/users/upsert' + ( user.id ? `/${user.id}` : '' )

        commit('saveRequest')
        return axios.post(path, { user })
            .then(response => {
                commit('saveRequestSuccess', response.data)
            }).catch(exception => {
                commit('saveRequestFailed', exception)
            })
    }
}
