/* @name controller.js
 * @desc controls all the major functionality of the app
 */

const state = {
  simulationStatus: false,
}

const getters = {
  getSimulationStatus: () => {
    return state.simulationStatus;
  }
}

const actions = {
  /* 
   * @method start - begins the simulation of the lifecycle
   */
  start({ commit }) {
    mutations.setSimulationStatus(true);
    const simulation = setInterval(function () {
      commit('lifecycle/move', null, { root: true });
      commit('lifecycle/spawn', null, { root: true });
      if (state.simulationStatus === false) { 
        clearInterval(simulation); 
      }
    }, 100)
  },

  /* 
   * @method stop - ends the simulation of the lifecycle
   */
  stop() {
    mutations.setSimulationStatus(false)
  }
}

const mutations = {
  setSimulationStatus: status => {
    state.simulationStatus = status;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
