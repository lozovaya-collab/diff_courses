import Vue from 'vue';
import Vuex from 'vuex';
import newUser from './modules/newUser';
import registrations from './modules/registrations';
import addUser from './modules/addUser'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newUser,
        registrations,
        addUser
    }
});