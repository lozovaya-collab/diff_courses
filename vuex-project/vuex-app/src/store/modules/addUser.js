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
        add(state) {
            this.dispatch('addToSystem', state.nameNewUser);
            state.nameNewUser = '';
        },
    },
    actions: {
        addNewUser({ commit }) {
            commit('add')
        },
        addToSystem({ rootState }, name) {
            const newUser = {
                id: rootState.newUser.users.length,
                name,
                registered: false,
            }

            rootState.newUser.users.push(newUser)
        }
    },

}