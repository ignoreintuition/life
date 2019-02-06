import Vue from 'vue'
import Vuex from 'vuex'
import lifecycle from './modules/lifecycle'
import controller from './modules/controller'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lifecycle,
    controller
  }
})

