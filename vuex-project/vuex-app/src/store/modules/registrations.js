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
        register(context, userInfo) {
            console.log(context, userInfo)
                // const user = state.users.find(item => item.id == userInfo.id);
                // user.registered = true;
        },
    },
    actions: {
        registerUser({ commit }, user) {
            commit('register', user)
        }
    },

}