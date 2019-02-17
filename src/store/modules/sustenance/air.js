/* jshint esversion: 6 */

const state = {
    airSuppy: 100,
};

const getters = {
    getAirSuppy: function() {
        return state.airSuppy;
    },
};

const mutations = {

};

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
};
