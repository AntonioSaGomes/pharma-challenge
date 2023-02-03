import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSkipDomainInjection: [
      "*.salesforce.com",
      "*.force.com",
      "*.google.com",
      "*.fisio.eu.auth0.com",
    ],
  },
});
