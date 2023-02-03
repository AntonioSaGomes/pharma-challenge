import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createAuth0 } from "@auth0/auth0-vue";

const domain = import.meta.env.VITE_DOMAIN as string;
const clientId = import.meta.env.VITE_CLIENT_ID as string;
const redirect_uri = import.meta.env.VITE_REDIRECT_URI as string;
import router from "./router";

const app = createApp(App);

app
  .use(
    createAuth0({
      domain,
      clientId,
      authorizationParams: {
        redirect_uri,
      },
    })
  )
  .use(router)
  .mount("#app");
