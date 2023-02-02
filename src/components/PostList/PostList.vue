<template>
  <div class="post-list-wrapper">
    <div class="post-list-header">
      <h2 data-testid="posts-user-name">Posts</h2>
      <Button text="New Post" @click.native="handleNewPost" />
    </div>
    <div class="post-list-container-wrapper">
      <template v-if="loading">
        <LoadingSpinner />
      </template>
      <template v-else>
        <transition name="fade">
          <div v-show="!loading" class="post-list-container">
            <UserPost v-for="post in user_posts" :post="post" />
          </div>
        </transition>
      </template>
    </div>

    <PostContainerModal
      @newPost="addNewPost"
      :showModal="showNewPostModal"
      @close="showNewPostModal = false"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Post } from "../../models/Post";
import { getUserPostsList } from "../../services/posts.service";
import UserPost from "../UserPost/UserPost.vue";
import Button from "../../material/Button/Button.vue";
import PostContainerModal from "../PostContainerModal/PostContainerModal.vue";
import LoadingSpinner from "../../material/LoadingSpinner/LoadingSpinner.vue";

export default defineComponent({
  components: {
    UserPost,
    Button,
    PostContainerModal,
    LoadingSpinner,
  },
  data() {
    return {
      user_posts: [] as Array<Post>,
      showNewPostModal: false,
      loading: true,
    };
  },
  created() {
    this.fetchUserPosts();
  },
  methods: {
    async fetchUserPosts() {
      this.loading = true;
      const userId = this.$route.params.userId as string;
      const data = await getUserPostsList(parseInt(userId));
      this.user_posts = data;
      this.loading = false;
    },
    handleNewPost() {
      this.showNewPostModal = true;
    },
    addNewPost(post: Post) {
      this.user_posts.unshift(post);
    },
  },
});
</script>
<style scoped>
.post-list-wrapper {
  height: 100%;
  width: max(90%, 400px);
}

.post-list-container-wrapper {
  height: 400px;
  max-height: 400px;
  width: 100%;
}

.post-list-container {
  display: grid;
  gap: 1rem;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.post-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
