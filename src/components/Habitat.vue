<template>
    <svg id="habitat">
        <organism v-for="node in nodeList" :key="node.id" v-bind:target="node"></organism>
        <tree v-bind:target="tree"/> 
    </svg>
</template>

<script>
import organism from "./Organism.vue";
import tree from "./Tree.vue";
import store from "../store";
import data from "../assets/data/nodes.json";
import { mapState } from "vuex";

/*
 * @name habitat
 * @desc template for the container that will house all of the organisms
 */
export default {
    name: "habitat",
    components: {
        organism,
        tree,
    },
    created: function() {
        store.commit("lifecycle/add", data);
    },
    computed: mapState({
        nodeList: state => state.lifecycle.population
    })
};
</script>

<style scoped>
#habitat {
    width: 500px;
    height: 300px;
    background-color: #eee5e9;
    border: #383d3b solid 2px;
}
</style>
