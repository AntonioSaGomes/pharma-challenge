<template>
  <button
    :disabled="disabled"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{
      opacity,
    }"
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      opacity: 1,
    };
  },
  watch: {
    disabled: {
      handler() {
        this.opacity = this.disabled ? 0.3 : 0.8;
      },
      immediate: true,
    },
  },
  methods: {
    handleMouseEnter() {
      if (this.disabled) return;
      this.opacity = 1;
    },
    handleMouseLeave() {
      if (this.disabled) return;
      this.opacity = 0.8;
    },
  },
});
</script>

<style scoped>
button {
  width: fit-content;
  padding: 0.8rem;
  color: white;
}
</style>
