import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    maxMadness: 40,
    importantPeople: []
};

const mutations = {
    storeImportantPeople(state, people) {
        state.importantPeople = people;
    },
    clearAllMadness(state) {
        if (!state.importantPeople) {
            return;
        }

        state.importantPeople = state.importantPeople.map((dumb) => {
            dumb.madness = 0;

            return dumb;
        });
    }
};

const actions = {
    fetchImportantPeople({commit}) {
        return axios.get('/ajax.php')
            .then(({ data: importantPeople }) => {
                commit('storeImportantPeople', importantPeople);
            });
    },
    clearMadness({commit}) {
        commit('clearAllMadness');
    }
};

const getters = {
    hasWarStarted(state) {
        const counter = state.importantPeople
            .reduce((total, actual) => total + Number(actual.madness), 0);

        return counter >= state.maxMadness;
    },
    importantPeople(state) {
        return state.importantPeople;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});