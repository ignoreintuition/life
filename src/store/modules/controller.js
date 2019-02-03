const state = {
  all: []
}

const getters = {}

const actions = {}

const mutations = {
  add(state, nodes) {
    state.all.push(nodes);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
