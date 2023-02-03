import { shallowMount } from "@vue/test-utils";
import { describe, it, beforeEach, expect } from "vitest";
import CustomButton from "../../../material/CustomButton/CustomButton.vue";
import ErrorToast from "../../../material/ErrorToast/ErrorToast.vue";
import CustomInput from "../../../material/CustomInput/CustomInput.vue";
import UserPost from "../../UserPost/UserPost.vue";
import SelectUserContainer from "../SelectUserContainer.vue";

describe("SelectUserContainer", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(SelectUserContainer, {
      components: { CustomInput, CustomButton, ErrorToast, UserPost },
    });
  });

  it("renders the component", () => {
    expect(wrapper.find(".user-posts-login").exists()).toBe(true);
  });

  it("displays the error message when user email does not exist", async () => {
    wrapper.setData({ user_email: "invalid@email.com" });
    await wrapper.vm.handleNextStep();
    expect(wrapper.vm.errorMessage).toBe("User email does not exist.");
  });
});
