<template>
  <div id="app">
    <svg id="world">
      <atom 
        v-for="node in nodeList" 
        v-bind:target="node"
      ></atom>
    </svg>
  </div>
</template>

<script>
import atom from './components/atom.vue'
import { setInterval } from 'timers';

export default {
  name: 'app',
  data: function() {
    return {
      nodeList: [
        { x: 100, y: 100 },
        { x: 10, y: 50 },
        { x: 75, y: 25 },
        { x: 150, y: 200 },
      ],
    } 
  },
  components: {
    atom
  }
}

setInterval(function(){
  //controller
}, 1000)
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
#world {
  width: 500px;
  height: 300px;
}
</style>
