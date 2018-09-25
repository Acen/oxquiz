import Vue from 'vue';
import Vuex from "vuex";
import * as actions from './actions';
import mutations from './mutations'
import getters from './getters';

Vue.use(Vuex);

const state = {
    question: null,
    questions: [],
    user: null,
    notifications: [],
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});