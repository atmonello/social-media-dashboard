import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type Theme = "light" | "dark";

export default new Vuex.Store({
  state: {
    theme: "light",
  },
  mutations: {
    setTheme(state, value: Theme) {
      state.theme = value;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getDarkTheme(state) {
      return state.theme === "dark";
    },
  },
});
