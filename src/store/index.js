import { createStore } from "vuex";
import { getGenreList } from "@/services/movieService.js";

const store = createStore({
  state: {
    search: "",
    genreList: [],
    cartProducts: [],
    favoriteProducts: [],
    isModalOpen: false,
  },
  mutations: {
    setGenreList(state, payload) {
      state.genreList = payload;
    },
    setSearch(state, payload) {
      state.search = payload;
    },
    setCart(state, payload) {
      state.cartProducts = payload;
    },
    setFavorites(state, payload) {
      state.favoriteProducts = payload;
    },
    setModal(state, payload) {
      state.isModalOpen = payload;
    },
  },
  actions: {
    fetchGenreList: async ({ commit }) => {
      const { genres } = await getGenreList();
      commit("setGenreList", genres);
    },
    addToCart: ({ commit, state }, payload) => {
      const cart = [payload, ...state.cartProducts];
      commit("setCart", cart);
    },
    removeFromCart: ({ commit, state }, payload) => {
      const cart = state.cartProducts.filter((item) => item.id !== payload.id);
      commit("setCart", cart);
    },
    addToFavorites: ({ commit, state }, payload) => {
      const favorites = [payload, ...state.favoriteProducts];
      commit("setFavorites", favorites);
    },
    removeFromFavorites: ({ commit, state }, payload) => {
      const favorites = state.favoriteProducts.filter((item) => item.id !== payload.id);
      commit("setFavorites", favorites);
    },
  },
  getters: {
    findGenreById: (state) => (id) => {
      return state.genreList.find((genre) => genre.id === id);
    },
    findFavoriteById: (state) => (id) => {
      return state.favoriteProducts.some((item) => item.id === id);
    },
  },
});

export default store;
