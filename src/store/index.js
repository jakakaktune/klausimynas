import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'test',
    slide: 0,
    selected: false,
    score: 0,
    atsakymai: [
      false, 5, 7, 6, 2, 0
    ]
  },
  mutations: {
    increment (state) {
      if (state.selected == state.atsakymai[state.slide]) {
        state.score ++;
      }
      console.log(state.selected, state.atsakymai[state.slide], state.slide, state.score);

      state.slide++;
      state.selected = false;
    },
    select (state, index) {
      state.selected = index;
    },
    start (state) {
      state.slide++;
    }
  },
  actions: {
  },
  modules: {
  }
})
