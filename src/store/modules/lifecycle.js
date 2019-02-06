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
    if (Array.isArray(sample))
      sample.forEach(e => state.population.push(e));
    else state.population.push(sample);
  },
  move(state) {
    state.population.forEach(e => {
      e.x += Math.random() * 10 - 5;
      e.y += Math.random() * 10 - 5;
    })
  },
  spawn(state) {
    state.population.forEach(e => {
      if (Math.random() * 100 >= 99)
        mutations.add(state, { id: null, x: e.x + 10, y: e.y + 10 })
    })
  },
  die() {
    // TODO
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}