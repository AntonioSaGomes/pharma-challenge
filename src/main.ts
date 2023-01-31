import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createAuth0 } from "@auth0/auth0-vue";

const domain = "fisio.eu.auth0.com";
const clientId = "Z0NBrRVust481NCjWFe9OSgLvaGUKr15";
const redirect_uri = "http://localhost:3000/callback";

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
  .mount("#app");
