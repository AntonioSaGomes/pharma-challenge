<template>
  <div class="login-container-wrapper">
    <div class="login-container">
      <h1 class="title bold">Koerber Pharma</h1>
      <img class="logo-icon" src="/logo.svg" />
      <Button text="Login" @click="login" />
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../material/Button/Button.vue";
import Input from "../material/Input/Input.vue";

export default {
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
  },
  components: {
    Button,
    Input,
  },
};
</script>

<style scoped>
.social-logins-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-container-wrapper {
  overflow-y: auto;
  height: 100%;
  width: 100%;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  height: 400px;
  align-self: center;
}

.title {
  text-align: left;
}

.social-logins {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-login-item {
  padding: 1rem;
}

.logo-icon {
  width: 10rem;
  height: 6rem;
}
</style>
