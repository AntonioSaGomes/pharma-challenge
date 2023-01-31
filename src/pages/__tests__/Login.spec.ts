import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Login from "../Login.vue";

describe("Login", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(Login);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("displays the correct title", () => {
    const wrapper = mount(Login);
    const title = wrapper.find(".title");
    expect(title.text()).toBe("Korber Pharma");
  });

  it("displays input fields for name and password", () => {
    const wrapper = mount(Login);
    const nameInput = wrapper.find('input[label="name"]');
    const passwordInput = wrapper.find('input[label="password"]');
    expect(nameInput.exists()).toBe(true);
    expect(passwordInput.exists()).toBe(true);
  });

  it("displays the login button", () => {
    const wrapper = mount(Login);
    const loginButton = wrapper.find("button");
    expect(loginButton.text()).toBe("Login");
  });

  it("displays the social login options", () => {
    const wrapper = mount(Login);
    const socialLogins = wrapper.findAll(".social-login-item");
    expect(socialLogins.length).toBe(3);
  });
});
