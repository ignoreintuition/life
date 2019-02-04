<template>
  <div id="app">
    <h1>Life Simulator</h1>
    <p>
      The purpose of this app is to set various parameters around
      a set of organisms to see how they behave over several generations.
    </p>
    <habitat/>
  </div>
</template>

<script>
import store from "../store";
import organism from "./Organism.vue";
import habitat from "./Habitat.vue";

export default {
  name: "app",
  components: {
    habitat
  }
};

setInterval(function(){
  store.commit('controller/move')
}, 1000)
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
