<template>
  <div class="login-container-wrapper">
    <div class="login-container">
      <img class="logo-icon" src="/logo-white.svg" />
      <p>Access our platform too see some amazing content</p>
      <CustomButton class="login-btn" text="Login" @click="login" />
    </div>
    <img class="login-img" src="login-image.png" />
  </div>
</template>
<script lang="ts">
import CustomButton from "../material/CustomButton/CustomButton.vue";

export default {
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
  },
  components: {
    CustomButton,
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  overflow-y: auto;
  padding: 4rem;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  align-self: center;
}

.title {
  text-align: left;
}

.logo-icon {
  width: 10rem;
  height: 6rem;
}

.login-img {
  max-width: 100%;
  height: auto;
  width: auto\9;
}

@media screen and (max-width: 800px) {
  .login-container-wrapper {
    padding: 1rem;
  }
}
@media screen and (max-width: 600px) {
  .login-container-wrapper {
    grid-template-columns: 1fr;
    padding: 0rem;
  }
}
</style>
