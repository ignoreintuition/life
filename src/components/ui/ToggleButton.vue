<template>
    <button class="btn btn-primary" v-on:click="onButtonClick" id="ToggleSimulation"> Toggle Simulation </button>
</template>

<script>

/*
 * @name ToggleButton
 * @desc Toggle the Simulation on or off
 */
import store from "../../store";

export default {
  name: "toggleButton",
  methods: {
    onButtonClick: function() {
      if (store.getters["controller/getSimulationStatus"] === true)
        store.dispatch("controller/stop");
      else 
        store.dispatch("controller/start");
    }
  }
};
</script>

<style scoped>

</style>