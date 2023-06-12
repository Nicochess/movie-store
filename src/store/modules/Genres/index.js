import { getGenreList } from "@/services/movieService.js";

export default {
  state: {
    list: [],
  },
  mutations: {
    setGenreList(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    fetchGenreList: async ({ commit }) => {
      const { genres } = await getGenreList();
      commit("setGenreList", genres);
    },
  },
  getters: {
    findGenreById: (state) => (id) => {
      return state.list.find((genre) => genre.id === id);
    },
  },
};
