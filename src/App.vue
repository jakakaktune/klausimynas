<template>
  <div id="app">
    <pradzia v-if="!$store.state.slide" />
    <karusele v-if="$store.state.slide" />
  </div>
</template>

<script>
import Karusele from './components/karusele.vue'
import Pradzia from './components/pradzia.vue'


export default {
  name: 'App',
  components: {
    Pradzia,
    Karusele,
  },
  mounted: function () {
    console.log(this.$store.state.test)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  padding: 15px;
  background: #2c3e50;
  color: #fff;
  border-radius: 500px;
  border: 0;
  min-width: 200px;
  font-weight: bold;
  cursor: pointer;
}

.button.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
