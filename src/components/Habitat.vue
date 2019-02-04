<template>
  <svg id="habitat">
    <organism v-for="node in nodeList" :key="node.id" v-bind:target="node"></organism>
  </svg>
</template>

<script>
import organism from "./Organism.vue";
import store from "../store";
import data from "../assets/data/nodes.json";
import { mapState } from "vuex";

export default {
  name: "habitat",
  components: {
    organism
  },
  created: function() {
    store.commit("controller/add", data);
  },
  computed: mapState({
    nodeList: state => state.controller.population
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#habitat {
  width: 500px;
  height: 300px;
  background-color: #eee5e9;
  border: #383d3b solid 2px;
}
</style>
