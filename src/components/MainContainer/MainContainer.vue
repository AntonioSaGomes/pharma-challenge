<template lang="">
  <div class="btn-wrapper">
    <img
      v-if="isUserPage"
      class="back-btn icon clickable"
      src="/icons/arrow-back.svg"
      @click="goBack"
    />
  </div>
  <div class="main-container w-100">
    <RouterView v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </RouterView>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      transitionName: "route-right",
    };
  },
  watch: {
    $route() {
      this.transitionName =
        this.$route.name === "user-posts" ? "route-left" : "route-right";
    },
  },
  computed: {
    isUserPage() {
      return this.$route.params.userId;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.user-post-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.main-container {
  display: grid;
  place-items: center;
  flex-grow: 1;
}

.btn-wrapper {
  position: absolute;
  left: 0.5rem;
  top: 1rem;
}

.route-left-enter-from {
  opacity: 0;
  transform: translateX(500px);
}
.route-right-enter-from {
  opacity: 0;
  transform: translateX(-500px);
}

.route-right-enter-active,
.route-left-enter-active {
  transition: all 0.3s ease-out;
}

.route-left-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}
.route-right-leave-to {
  opacity: 0;
  transform: translateX(500px);
}

.route-right-enter-active,
.route-left-enter-active {
  transition: all 0.3s ease-in;
}
</style>
