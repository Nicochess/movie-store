import { createStore } from "vuex";
import modules from "./modules";

const store = createStore({
  modules,
  state: {
    search: "",
    isModal: "",
    isLoading: false,
  },
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
    },
    setModal(state, payload) {
      state.isModal = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
});

export default store;
