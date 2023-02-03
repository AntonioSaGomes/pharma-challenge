<script lang="ts">
import LoadingSpinner from "./material/LoadingSpinner/LoadingSpinner.vue";
import { APP_TITLE } from "./constants/constants";
import KPHeader from "./components/KPHeader/KPHeader.vue";
import LoginPage from "./pages/LoginPage.vue";

export default {
  components: { LoginPage, LoadingSpinner, KPHeader },
  data() {
    return {
      isLoading: this.$auth0.isLoading,
      isAuthenticated: this.$auth0.isAuthenticated,
      title: APP_TITLE,
    };
  },
  watch: {
    // a more robust solution would be to use router navigations guards
    isLoading() {
      if (this.$route.name === "login" && this.isAuthenticated)
        this.$router.push({ name: "select-user-post" });
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<template>
  <template v-if="isLoading">
    <LoadingSpinner />
  </template>
  <template v-else>
    <KPHeader :title="title" />
    <template v-if="!isAuthenticated">
      <LoginPage />
    </template>
    <template v-else>
      <RouterView />
    </template>
  </template>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
