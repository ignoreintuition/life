<template>
  <circle
    class="organism"
    :cx="target.x"
    :cy="target.y"
    r="5"
    stroke="#383D3B"
    stroke-width="1"
    fill="#52DEE5"
  />
</template>

<script>
/*
 * @name: organism
 * @desc: the individual living creatures that exist in the habitat
 */
export default {
  name: "organism",
  props: {
    target: Object
  },
  methods: {},
  mutations: {}
};
</script>

<style scoped>
</style>
