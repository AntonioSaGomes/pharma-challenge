<template>
  <div class="main-page h-100">
    <div class="main-container-wrapper">
      <MainContainer />
    </div>
  </div>
</template>
<script lang="ts">
import MainContainer from "../components/MainContainer/MainContainer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MainContainer,
  },
});
</script>
<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
}

.main-container-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.5rem;
  flex-grow: 1;
}
</style>
