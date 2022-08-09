export default {
    state: {
        nameNewUser: "",
    },
    getters: {
        nameUser(state) {
            return state.nameNewUser;
        },
    },
    mutations: {
        clearInput(state) {
            state.nameNewUser = '';
        },
    },
    actions: {
        addNewUser({ commit, rootState }, name) {
            const newUser = {
                id: rootState.newUser.users.length,
                name,
                registered: false,
            }

            rootState.newUser.users.push(newUser)
            commit('clearInput')
        },
    },

}