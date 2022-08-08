export default {
    state: {
        users: [{
            id: 0,
            name: "Ann",
            registered: false,
        }, {
            id: 1,
            name: "Dima",
            registered: false,
        }, {
            id: 2,
            name: "Antonis",
            registered: false,
        }, {
            id: 3,
            name: "Clavenia",
            registered: false,
        }, ]
    },
    getters: {
        newUsers(state) {
            return state.users.filter(user => !user.registered)
        }
    },
    mutations: {
        register(context, userInfo) {
            console.log(context)
            const user = context.state.users.find(item => item.id == userInfo.id);
            user.registered = true;

            const registratedUser = Object.assign({}, user);

            context.state.registrations.push(registratedUser);
        },
    },
    actions: {
        registerUser({ commit }, user) {
            commit('register', user)
        }
    },

}