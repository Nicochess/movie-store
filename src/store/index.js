import { createStore } from "vuex";
import { getGenreList } from "@/services/movieService.js";

const store = createStore({
  state: {
    search: "",
    genreList: [],
    cartProducts: [],
    favoriteProducts: [],
    isModal: "",
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
      state.isModal = payload;
    },
  },
  actions: {
    fetchGenreList: async ({ commit }) => {
      const { genres } = await getGenreList();
      commit("setGenreList", genres);
    },
    addToCart: ({ dispatch, state }, payload) => {
      const cart = [payload, ...state.cartProducts];
      dispatch("commitCart", cart);
    },
    commitCart: ({ commit, dispatch }, cart) => {
      commit("setCart", cart);
      dispatch("setCartPersistence", cart);
    },
    removeFromCart: ({ dispatch, state }, { id }) => {
      const cart = state.cartProducts.filter((item) => item.id !== id);
      dispatch("commitCart", cart);
    },
    addToFavorites: ({ state, dispatch }, payload) => {
      const favorites = [payload, ...state.favoriteProducts];
      dispatch("commitFavorites", favorites);
    },
    removeFromFavorites: ({ dispatch, state }, { id }) => {
      const favorites = state.favoriteProducts.filter((item) => item.id !== id);
      dispatch("commitFavorites", favorites);
    },
    commitFavorites: ({ commit, dispatch }, payload) => {
      commit("setFavorites", payload);
      dispatch("setFavoritesPersistence", payload);
    },
    setFavoritesPersistence: ({ state }) => {
      localStorage.setItem(
        "favoritesProducts",
        JSON.stringify(state.favoriteProducts)
      );
    },
    setCartPersistence: ({ state }) => {
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
  },
  getters: {
    findGenreById: (state) => (id) => {
      return state.genreList.find((genre) => genre.id === id);
    },
    findFavoriteById: (state) => (id) => {
      return state.favoriteProducts.some((item) => item.id === id);
    },
    findAmountById: (state) => (id) => {
      return state.cartProducts.filter((item) => item.id === id);
    },
    renderCartList: (state) => {
      return state.cartProducts.filter((obj, index, self) => {
        return index === self.findIndex((o) => o.id === obj.id);
      });
    },
    totalCart: (state) => {
      return state.cartProducts.reduce(
        (acc, item) => Math.floor(item.rate * 5) + acc,
        0
      );
    },
  },
});

export default store;
