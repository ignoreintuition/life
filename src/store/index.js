/* jshint esversion: 6*/
import Vue from 'vue';
import Vuex from 'vuex';
import utilities from './modules/utilities';
import lifecycle from './modules/lifecycle';
import controller from './modules/controller';
import air from './modules/sustenance/air.js';
import food from './modules/sustenance/food.js';
import shelter from './modules/sustenance/shelter.js';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faPlay, faPause, faFastForward, faFastBackward);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        utilities, 
        controller,
        air,
        food,
        shelter,
        lifecycle,
    }
});

