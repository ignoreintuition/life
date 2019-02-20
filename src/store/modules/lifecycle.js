/* jshint esversion: 6 */
import { mapActions } from "vuex";
import utilities from "./utilities";
import air from "./sustenance/air";
import { faEye } from "@fortawesome/free-solid-svg-icons";

/* @name lifecycle.js
 * @desc Contains mutations for managing organisms lifecycle events
 */

const state = {
    population: []
};

const getters = {
    population: state => {
        return state.population;
    }
};

const mutations = {
    add(state, sample) {
        if (!Array.isArray(sample))
            sample = new Array(sample);
        sample.forEach(e => {
            e.age = 0;
            e.gender = 'male';
            state.population.push(e);
        });
    },
    move(state) {
        state.population.forEach(e => {
            let x = e.x + Math.random() * 10 - 5;
            let y = e.y + Math.random() * 10 - 5;
            if (utilities.actions.checkBounds(x, y)) {
                e.x = x;
                e.y = y;
            }
        });
    },
    breath(state) {
      state.population.forEach(e => {
        if (air.getters.getOxygenLevel <= 0) {
            e.oxygen = false;
        } else {
            air.mutations.depleteAir();
        }
      });
    },
    progress(state) {
        state.population.forEach((e, i)=>{
            e.age++;
            if (e.age >= 99){
                mutations.die(state, i);
            }
        });
    },
    spawn(state) {
        state.population.forEach(e => {
            if (Math.random() * 100 >= 99)
                mutations.add(state, { id: null, x: e.x + 10, y: e.y + 10 });
        });
    },
    die(state, i) {
        state.population.splice(i, 1);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
