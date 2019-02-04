const state = {
  population: []
}

const getters = {
  population: state => {
    return state.population;
  }
}

const actions = {}

const mutations = {
  add(state, sample) {
    if (Array.isArray(sample))
      sample.forEach( e=> state.population.push(e));
    else state.population.push(sample);
  },
  move(state) {
    state.population.forEach(e=> {
      e.x+=Math.random() * 10 - 5;
      e.y+=Math.random() * 10 - 5;
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
