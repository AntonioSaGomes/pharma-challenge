<template>
  <Header :title="title" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header/Header.vue";
import { APP_TITLE } from "../constants/constants";
export default defineComponent({
  components: {
    Header,
  },
  data() {
    return {
      title: APP_TITLE,
    };
  },
});
</script>
<style></style>
