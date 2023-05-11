<template>
  <div class="pasirinkimai">
    <div class="item" v-for="(image, index) in images" v-bind:key="index"
      @click="select"
      :data-id="index"
     :style="{
      'background-image': `url('${image}')`
    }">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Pasirinkimai',
  data() {
    return {
      images: [
        require('@/assets/ukraina.png'),
        require('@/assets/budapestas.jpeg'),
        require('@/assets/italija.jpeg'),
        require('@/assets/ispanija.jpg'),
        require('@/assets/astana.jpeg'),
        require('@/assets/sweeden.webp'),
        require('@/assets/portugalija.webp'),
        require('@/assets/izraelis.jpeg'),
      ]
    }
  },
  methods: {
    select: function (e) {
      let selected = this.$el.querySelector('.selected'); 
      if (selected) {
        selected.classList.remove('selected');
      }
      e.target.classList.add('selected');
      this.$store.commit('select', e.target.getAttribute('data-id'));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pasirinkimai {
    margin: 50px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    align-items: center;
    justify-content: center;
  }

  .item {
    width: 250px;
    height: 175px;
    background-size: cover;
    cursor: pointer;
    border-radius: 10px;
  }

  .selected {
    box-shadow: inset 0 0 50px #0f0;
  }
</style>
