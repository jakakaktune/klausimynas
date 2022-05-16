<template>
  <div>
    <div class="carousel">
      <pirma v-if="slide == 1" />
      <antra v-if="slide == 2" />
      <trecia v-if="slide == 3" />
      <ketvirta v-if="slide == 4" />
      <penkta v-if="slide == 5" />
      <rezultatas v-if="slide == 6" />
    </div>
    
    <pasirinkimai v-if="slide < 6" />
    <button 
    v-if="slide < 6"
    :class="{
      'button': true,
      'disabled': selected === false
      }
    " @click="increment">Kitas</button>
  </div>
</template>

<script>
import Pasirinkimai from './pasirinkimai.vue';
import pirma from './pirma.vue'
import antra from './antra.vue'
import trecia from './trecia.vue'
import ketvirta from './ketvirta.vue'
import penkta from './penkta.vue'
import rezultatas from './rezultatas.vue'
export default {
  components: { pirma, Pasirinkimai, rezultatas, antra, trecia, ketvirta, penkta },
  name: 'Karusele',
  mounted: function ()  {
    console.log(this.selected)
  },
  computed: {
    slide() {
      return this.$store.state.slide;
    },
    selected () {
      return this.$store.state.selected;
    }
  },
  methods: {
    increment () {
      let selected = this.$el.querySelector('.selected');

      if (selected) {
        selected.classList.remove('selected');
      }

      this.$store.commit('increment');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .carousel {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
  }

  .slide {
    width: 100vw;
    flex-basis: 100vw;
  }
</style>
