<template>
  <div class="rezultatas">
    <h2>Jūsų rezultatas:</h2>
    <h2>{{ $store.state.score ? $store.state.score : 0 }}</h2>
  </div>
</template>

<script>
export default {
  name: 'rezultatas',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rezultatas {
  text-align: center;
  width: 100vw;
  flex-basis: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

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
