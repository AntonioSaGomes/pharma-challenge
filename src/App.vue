<script lang="ts">
import Login from "./pages/Login.vue";
import MainPage from "./pages/MainPage.vue";

export default {
  components: { Login, MainPage },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>

<template>
  <template v-if="isAuthenticated">
    <MainPage />
  </template>
  <template v-else>
    <Login />
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
