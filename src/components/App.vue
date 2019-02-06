<template>
  <div id="app">
    <h1>Life Simulator</h1>
    <p>
      The purpose of this app is to set various parameters around
      a set of organisms to see how they behave over several generations.
    </p>
    <div>
      <habitat/>
    </div>
    <div>
      <toggleButton/>
    </div>
  </div>
</template>

<script>
import store from "../store";
import organism from "./Organism.vue";
import habitat from "./Habitat.vue";
import toggleButton from "./ui/ToggleButton.vue";
/*
 * @name app
 * @desc entry point for the app
 */
export default {
  name: "app",
  components: {
    habitat,
    toggleButton
  }
};

store.dispatch("controller/start");
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
