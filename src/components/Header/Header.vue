<template>
  <div class="header">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="header-options">
      <img
        class="icon clickable"
        role="button"
        src="/icons/logout.svg"
        @click="logout"
      />
      <p>{{ user.name }}</p>
      <img class="icon-large" :src="user.picture" />
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
</style>
