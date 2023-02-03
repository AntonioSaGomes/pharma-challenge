import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import LoginPage from "../LoginPage.vue";

describe("LoginPage", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(LoginPage);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("displays the login button", () => {
    const wrapper = mount(LoginPage);
    const loginButton = wrapper.find("button");
    expect(loginButton.text()).toBe("Login");
  });
});
