<template>
  <div class="select-user-container">
    <div class="user-posts-login-wrapper">
      <div class="user-posts-login">
        <p>Enter the users email to see some awesome posts</p>
        <div class="user-input">
          <CustomInput v-model="user_email" type="email" label="email" />
          <CustomButton
            text="Next"
            :disabled="!isValidEmail"
            @click="handleNextStep"
          />
        </div>
        <ErrorToast v-if="errorMessage" :errorMessage="errorMessage" />
      </div>
    </div>
    <UserPost class="sample-user-post" :post="mockPost" />
  </div>
</template>
<script lang="ts">
import CustomButton from "../../material/CustomButton/CustomButton.vue";
import CustomInput from "../../material/CustomInput/CustomInput.vue";
import { K_PHARMA_USER } from "../../constants/constants";
import { getUsers } from "../../services/users.service";
import { User } from "../../models/User";
import ErrorToast from "../../material/ErrorToast/ErrorToast.vue";
import UserPost from "../UserPost/UserPost.vue";
import { MOCK_POST } from "../../mocks/mockData";

export default {
  components: { CustomInput, CustomButton, ErrorToast, UserPost },
  data() {
    return {
      user_email: "",
      users: [] as Array<User>,
      errorMessage: "",
      user: null as User | null,
      mockPost: MOCK_POST,
    };
  },
  watch: {
    errorMessage() {
      if (this.errorMessage !== "") {
        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
      }
    },
  },
  created() {
    this.fetchUsers();
    this.checkPreviouslyEnteredEmail();
  },
  computed: {
    isEmail() {
      //eslint-disable-next-line
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.user_email
      );
    },
    isValidEmail() {
      return this.isEmail;
    },
  },
  methods: {
    async fetchUsers() {
      const data = await getUsers();
      data.forEach((user: any) => {
        const { id, name, email } = user;
        this.users.push({ id, name, email });
      });
    },
    handleNextStep() {
      const user = this.users.find((user) => user.email === this.user_email);
      if (user) {
        this.user = user;
        localStorage.setItem("kpharma_user", this.user_email);
        this.$router.push({
          path: `/posts/${this.user.id}`,
        });
      } else {
        this.errorMessage = "User email does not exist.";
      }
    },
    checkPreviouslyEnteredEmail() {
      this.user_email = localStorage.getItem(K_PHARMA_USER) ?? "";
    },
  },
};
</script>

<style scoped>
.select-user-container {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  width: 100%;
  padding: 4rem;
  box-sizing: border-box;
  gap: 2rem;
}
.user-posts-login-wrapper {
  display: grid;
  place-items: center;
}

.user-posts-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-input {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

@media screen and (max-width: 800px) {
  .select-user-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .sample-user-post {
    display: none;
  }
}
</style>
