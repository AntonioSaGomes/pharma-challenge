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
      <transition name="route" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </RouterView>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {};
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
  display: flex;
  justify-items: flex-start;
  margin-left: 3rem;
  box-sizing: border-box;
  width: calc(100% - 3rem);
}

.route-enter-from {
  opacity: 0;
  transform: translateX(500px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
