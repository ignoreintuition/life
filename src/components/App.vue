<template>
    <div id="app">
        <h1>Life Simulator</h1>
        <p>
        The purpose of this app is to set various parameters around
        a set of organisms to see how they behave over several generations.
        </p>
        <div class="container">
            <div class="row">
                <habitat/>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <panel/>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../store";
import organism from "./Organism.vue";
import habitat from "./Habitat.vue";
import panel from "./ui/Panel.vue";

/*
 * @name app
 * @desc entry point for the app
 */
export default {
    name: "app",
    components: {
        habitat,
        panel,
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
