<template>
  <div class="input-container">
    <label class="capitalize bold" :for="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="label"
      :label="label"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
}

.input-container input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid lightblue;
  width: 250px;
}

.input-container input::placeholder {
  text-transform: capitalize;
}
</style>
