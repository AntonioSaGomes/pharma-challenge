<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <img
        v-if="showCloseButton"
        class="close-btn clickable"
        src="/icons/close.svg"
        @click="closeModal"
      />
      <header v-if="title" class="modal-header">
        <p>{{ title }}</p>
      </header>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["close"],
  props: {
    showModal: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      default: "",
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
});
</script>
<style scoped>
.modal-wrapper {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
}

.modal-container {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #b2dfdb;
  padding: 2rem;
  color: black;
  width: min(600px, 100%);
  height: fit-content;
  box-sizing: border-box;
  border-radius: 0.25rem;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
