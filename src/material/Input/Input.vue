<template>
  <div class="input-container">
    <label class="capitalize bold" :for="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="label"
      :label="label"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
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
  methods: {
    updateValue(event: Event) {
      this.$emit(
        "update:modelValue",
        (<HTMLTextAreaElement>event.target).value
      );
    },
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
  padding: 0.8rem;
  border-radius: 5px;
  border: 2px solid lightblue;
  width: 250px;
}

.input-container input::placeholder {
  text-transform: capitalize;
}
</style>
