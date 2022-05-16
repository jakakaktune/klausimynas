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
        require('@/assets/Suomija.jpg'),
        require('@/assets/Portugalija.jpg'),
        require('@/assets/Indija.jpg'),
        require('@/assets/Prancuzija.jpg'),
        require('@/assets/Estija.jpg'),
        require('@/assets/Italija.png'),
        require('@/assets/Gruzija.jpg'),
        require('@/assets/Lenkija.webp'),
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
