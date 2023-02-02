<template>
  <div class="loading-spinner" data-testid="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<style>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid lightblue;
  border-top-color: var(--button-color);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
