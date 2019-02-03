<template>
  <div id="app">
    <svg id="world">
      <atom v-for="node in nodeList" v-bind:target="node"></atom>
    </svg>
  </div>
</template>

<script>
import atom from "./Atom.vue";
import store from "../store"
import data from "../assets/data/nodes.json"
import { mapState } from 'vuex'

export default {
  name: "app",
  components: {
    atom
  },
  created: function() {
    store.commit('controller/add', data)
  },
  computed: mapState({
    nodeList: state => state.controller.all[0]
  }),
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
#world {
  width: 500px;
  height: 300px;
}
</style>
