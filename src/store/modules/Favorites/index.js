export default {
  state: {
    products: [],
  },
  mutations: {
    setFavorites(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    addToFavorites: ({ state, dispatch }, payload) => {
      const favorites = [payload, ...state.products];
      dispatch("commitFavorites", favorites);
    },
    removeFromFavorites: ({ dispatch, state }, { id }) => {
      const favorites = state.products.filter((item) => item.id !== id);
      dispatch("commitFavorites", favorites);
    },
    commitFavorites: ({ commit, dispatch }, payload) => {
      commit("setFavorites", payload);
      dispatch("setFavoritesPersistence", payload);
    },
    setFavoritesPersistence: ({ state }) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.products)
      );
    },
  },
  getters: {
    findFavoriteById: (state) => (id) => {
      return state.products.some((item) => item.id === id);
    },
  },
};
