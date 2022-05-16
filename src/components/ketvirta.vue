<template>
  <div class="ketvirta slide">
    <h2>4</h2>
    <audio :src="require('@/assets/audio/4.mp3')" controls></audio>
  </div>
</template>

<script>
export default {
  name: 'ketvirta',
  mounted: function () {
    this.$el.querySelector('audio').play();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
