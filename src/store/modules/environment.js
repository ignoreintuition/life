/* jshint esversion: 6 */
import utilities from "./utilities";
import air from "./sustenance/air";

/* @name environment.js
 * @desc Contains mutations for environment
 */

const state = {
    trees: [],
};

const getters = {
    trees: state => {
        return state.trees;
    }
};

const mutations = {
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
