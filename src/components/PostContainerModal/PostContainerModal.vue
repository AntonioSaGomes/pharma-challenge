<template lang="">
  <Modal :showModal="showModal" @close="$emit('close')">
    <div class="post-container">
      <div class="title">
        <Input label="title" v-model="title" />
      </div>
      <label class="bold" value="description">Description</label>
      <textarea label="description" v-model="body" />
      <div class="post-button-wrapper">
        <Button :disabled="disabledForm" text="Send" @click="send" />
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { sendPost } from "../../services/posts.service";
import Button from "../../material/Button/Button.vue";
import Input from "../../material/Input/Input.vue";
import Modal from "../../material/Modal/Modal.vue";

export default defineComponent({
  components: { Button, Input, Modal },
  emits: ["close", "newPost"],
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      body: "",
      title: "",
    };
  },
  computed: {
    disabledForm() {
      return this.body.trim() === "" || this.title.trim() === "";
    },
  },
  methods: {
    clearData() {
      this.body = "";
      this.title = "";
    },
    async send() {
      const { body, title } = this;
      const id = this.$route.params.userId as string;
      const post = {
        body,
        title,
        userId: parseInt(id),
      };
      const userPost = await sendPost(post);
      this.clearData();
      this.$emit("newPost", userPost);
      this.$emit("close");
    },
  },
});
</script>
<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.post-button-wrapper {
  margin: auto;
}

textarea {
  border: 2px solid lightblue;
  height: 200px;
  padding: 0.5rem;
}
</style>
