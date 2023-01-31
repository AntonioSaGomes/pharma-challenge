<template>
  <button
    :style="{ 'background-color': backgroundColor ? backgroundColor : '' }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "white",
    },
  },
});
</script>

<style scoped>
.button-container {
  padding: 1rem;
}

.button-container {
  color: var(--button-color);
}
</style>
