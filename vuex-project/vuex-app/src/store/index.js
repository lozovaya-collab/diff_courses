import Vue from 'vue';
import Vuex from 'vuex';
import newUser from './modules/newUser';
import registrations from './modules/registrations'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newUser,
        registrations
    }
});