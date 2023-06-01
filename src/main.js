import { createApp } from "vue";
import { router } from "./router";
import VueTheMask from "vue-the-mask";
import "./style.scss";
import App from "./App.vue";
import store from "./store";
import MoviesClient from "./modules/axios";

const app = createApp(App);

app.use(store);
app.config.globalProperties.$http = MoviesClient;
app.use(router);
app.use(VueTheMask);

app.mount("#app");
