<script lang="ts">
import Login from "./pages/Login.vue";
import MainPage from "./pages/MainPage.vue";
import LoadingSpinner from "./material/LoadingSpinner/LoadingSpinner.vue";
import { APP_TITLE } from "./constants/constants";
import Header from "./components/Header/Header.vue";

export default {
  components: { Login, MainPage, LoadingSpinner, Header },
  data() {
    return {
      isLoading: this.$auth0.isLoading,
      isAuthenticated: this.$auth0.isAuthenticated,
      title: APP_TITLE,
    };
  },
  watch: {
    // a more robust solution would be to use router navigations guards
    $route() {
      if (!this.isAuthenticated && this.$route.name !== "login") {
        this.$router.push({ name: "login" });
      }
    },
    isAuthenticated() {
      if (this.$route.name === "login" && this.isAuthenticated)
        this.$router.push({ name: "select-user-post" });
    },
  },
};
</script>

<template>
  <template v-if="isLoading">
    <LoadingSpinner />
  </template>
  <template v-else>
    <Header :title="title" />
    <template v-if="!isAuthenticated">
      <Login />
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
