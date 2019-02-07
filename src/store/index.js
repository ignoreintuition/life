import Vue from 'vue'
import Vuex from 'vuex'
import lifecycle from './modules/lifecycle'
import controller from './modules/controller'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lifecycle,
    controller
  }
})

