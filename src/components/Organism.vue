<template>
  <circle class="organism" :cx="target.x" :cy="target.y" r="5" stroke="#383D3B" stroke-width="1" fill="#52DEE5"/>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "organism",
  props: {
    target: Object
  },
  mutations: {  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
