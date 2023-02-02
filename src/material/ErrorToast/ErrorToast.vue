<template>
  <div class="toast-wrapper">
    <div v-if="errorMessage" class="toast-error">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorToast",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.toast-error {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  background-color: #f44336;
  color: var(--secondary-text-color);
  border-radius: 5px;
}
</style>
