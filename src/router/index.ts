import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import PostList from "../components/PostList/PostList.vue";
import SelectUserContainer from "../components/SelectUserContainer/SelectUserContainer.vue";
import MainPage from "../pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/posts",
      name: "posts",
      component: MainPage,
      children: [
        {
          path: "",
          name: "select-user-post",
          component: SelectUserContainer,
        },
        {
          path: ":userId",
          name: "user-posts",
          component: PostList,
        },
      ],
    },
  ],
});

export default router;
