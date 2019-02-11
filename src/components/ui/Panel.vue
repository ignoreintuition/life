<template>
  <div>
    <a class="btn icon" href="#"><font-awesome-icon icon="fast-backward" v-on:click="onButtonClickSpeedDown" id="speedDown"/></i></a>
    <a class="btn icon" href="#"><font-awesome-icon icon="pause" v-on:click="onButtonClickToggle" id="ToggleSimulation"/></i></a>
    <a class="btn icon" href="#"><font-awesome-icon icon="fast-forward" v-on:click="onButtonClickSpeedUp" id="speedUp"/></i></a>
  </div>
</template>

<script>

/*
 * @name ToggleButton
 * @desc Toggle the Simulation on or off
 */
import store from "../../store";
import { mapState } from "vuex";

export default {
  name: "panel",
  methods: {
    onButtonClickSpeedUp(e){
      store.dispatch("controller/adjustSpeed", this.speed - 100);
    },
    onButtonClickSpeedDown(e){
      store.dispatch("controller/adjustSpeed", this.speed + 100);
    },
    onButtonClickToggle(e) {
      if (store.getters["controller/getSimulationStatus"] === true)
        store.dispatch("controller/stop");
      else 
        store.dispatch("controller/start");
    },
   },
  computed: mapState({
    speed: state => state.controller.simulationSpeed
  }),
};
</script>

<style scoped>
  .icon {
    margin: 2px;
  }
</style>