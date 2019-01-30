<template>
  <circle 
    :cx=target.x 
    :cy=target.y 
    r="5" 
    stroke="black" 
    stroke-width="1" 
    fill="red" 
  />
</template>

<script>
export default {
  name: 'atom',
  props: {
    target: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
