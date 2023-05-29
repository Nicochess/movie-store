import { createApp } from "vue";
import { router } from "./router";
import VueTheMask from "vue-the-mask";
import "./style.scss";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueTheMask);

app.mount("#app");
