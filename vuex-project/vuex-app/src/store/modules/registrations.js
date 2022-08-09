export default {
    state: {
        registrations: []
    },
    getters: {
        registeredUsers(state) {
            return state.registrations;
        },
        countUsers(state) {
            return state.registrations.length;
        },
    },
    mutations: {
        unregister(state, user) {
            this.dispatch('deleteRegistartion', user);

            const index = state.registrations.findIndex(item => item.id == user.id);
            state.registrations.splice(index, 1);
        },
    },
    actions: {
        unregisterUser({ commit }, user) {
            commit('unregister', user)
        },
        deleteRegistartion({ rootState }, user) {
            rootState.newUser.users.find(item => item.id == user.id).registered = false;
        },
    },

}