import Vue from 'vue'
import Vuex from 'vuex'
import controller from './modules/controller'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    controller
  }
})

