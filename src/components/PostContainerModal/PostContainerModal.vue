<template lang="">
  <CustomModal :showModal="showModal" @close="$emit('close')">
    <div class="post-container">
      <div class="title">
        <CustomInput label="title" v-model="title" />
      </div>
      <label class="bold" value="description">Description</label>
      <textarea label="description" v-model="body" />
      <div class="post-button-wrapper">
        <CustomButton :disabled="disabledForm" text="Send" @click="send" />
      </div>
    </div>
  </CustomModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { sendPost } from "../../services/posts.service";
import CustomButton from "../../material/CustomButton/CustomButton.vue";
import CustomInput from "../../material/CustomInput/CustomInput.vue";
import CustomModal from "../../material/CustomModal/CustomModal.vue";

export default defineComponent({
  components: { CustomButton, CustomInput, CustomModal },
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
