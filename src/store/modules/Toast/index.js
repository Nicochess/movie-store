export default {
  state: {
    message: "",
  },
  mutations: {
    setToastMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    commitToastMessage: ({ commit }, payload) => {
      commit("setToastMessage", payload);
      setTimeout(() => commit("setToastMessage", ""), 1500);
    },
    emitToastMessage: ({ dispatch }, payload) => {
      dispatch("commitToastMessage", payload);
    },
  },
};
