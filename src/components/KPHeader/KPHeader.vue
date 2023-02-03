<template>
  <div class="header">
    <div class="header-description">
      <img
        class="header-logo"
        src="/logo-white.svg"
        referrerpolicy="no-referrer"
      />
      <h1>{{ title }}</h1>
    </div>
    <div v-show="user != null" class="header-options">
      <img
        class="icon clickable"
        role="button"
        src="/icons/logout.svg"
        @click="logout"
      />
      <p class="bold">{{ user?.name }}</p>
      <img class="icon-large" :src="user?.picture" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: this.$auth0.user,
    };
  },
  methods: {
    logout() {
      this.$auth0.logout();
    },
  },
});
</script>
<style>
.header {
  background-color: var(--secondary-color);
  color: var(--secondary-text-color);
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
}
.header-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.header-description {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.header-logo {
  height: 2rem;
  width: 5rem;
}
</style>
