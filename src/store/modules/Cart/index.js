export default {
  state: {
    products: [],
  },
  mutations: {
    setCart(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    addToCart: ({ dispatch, state }, payload) => {
      const cart = [payload, ...state.products];
      dispatch("emitToastMessage", "Produto Adicionado");
      dispatch("commitCart", cart);
    },
    commitCart: ({ commit, dispatch }, cart) => {
      commit("setCart", cart);
      dispatch("setCartPersistence", cart);
    },
    removeFromCart: ({ dispatch, state }, { id }) => {
      const cart = state.products.filter((item) => item.id !== id);
      dispatch("commitCart", cart);
    },
    setCartPersistence: ({ state }) => {
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
  getters: {
    findAmountById: (state) => (id) => {
      return state.products.filter((item) => item.id === id);
    },
    renderCartList: (state) => {
      return state.products.filter((obj, index, self) => {
        return index === self.findIndex((o) => o.id === obj.id);
      });
    },
    totalCart: (state) => {
      return state.products.reduce(
        (acc, item) => Math.floor(item.rate * 5) + acc,
        0
      );
    },
  },
};
