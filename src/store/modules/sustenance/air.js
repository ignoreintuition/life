/* jshint esversion: 6 */

const state = {
    airSupply: 100,
};

const getters = {
    getAirSuppy: function() {
        return state.airSupply;
    },
};

const mutations = {
    depleteAir: function() {
        if (state.airSupply > 0){
            state.airSupply = state.airSupply - 0.01;
            return 1;
        } else {
            return 0;
        }
    },
    produceAir:function() {
        state.airSupply = state.airSupply + 0.01;
    }
};

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
};
