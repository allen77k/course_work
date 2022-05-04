import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke2: "",
    weather2: ""
  },
  mutations: {
    setJoke2(state, val) {
      state.joke2 = val;
    },
    setWeather2(state, val) {
      state.weather2 = val;
    }
  },
  actions: {},
  modules: {}
});
