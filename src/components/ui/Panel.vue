<template>
  <div class="form-group">
    <label for="speedInput"> Simulation Speed </label>
    <input :value="speed" @blur="updateSpeed" type="number" id="speedInput">
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
    updateSpeed(e){
      store.dispatch("controller/adjustSpeed", Number(e.target.value));
    }
   },
  computed: mapState({
    speed: state => state.controller.speed
  }),
};
</script>

<style scoped>

</style>