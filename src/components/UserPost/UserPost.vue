<template lang="">
  <div class="user-post" :style="{ 'border-color': borderColor }">
    <h3>{{ post.title }}</h3>
    <div class="post-description">
      {{ post.body }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "../../models/Post";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
    borderColor: {
      type: String,
      default: "lightblue",
    },
  },
});
</script>
<style>
.user-post {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1rem;
  height: 300px;
  overflow-y: hidden;
  padding: 0.5rem;
  border-radius: 3px;
  border: 2px solid;
  background: rgba(173, 216, 230, 0.3);
}
</style>
