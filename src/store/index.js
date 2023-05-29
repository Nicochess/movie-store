import { createStore } from "vuex";
import { getGenreList } from "@/services/movieService.js";

const store = createStore({
  state: {
    genreList: [],
  },
  mutations: {
    setGenreList(state, payload) {
      state.genreList = payload;
    },
  },
  actions: {
    async fetchGenreList({ commit }) {
      const res = await getGenreList();
      commit("setGenreList", res);
    },
  },
});

export default store;
