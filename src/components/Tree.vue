<template>
    <circle
    class="tree"
    :cx="target.x"
    :cy="target.y"
    r="5"
    stroke="#383D3B"
    stroke-width="1"
    fill="#00FF00"
    />
</template>

<script>
/*
 * @name: tree
 * @desc: floura of the environment
 */
export default {
    name: "tree",
    props: {
        target: Object
    },
    methods: {},
    mutations: {}
};
</script>

<style scoped>
</style>
