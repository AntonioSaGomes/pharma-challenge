import { shallowMount } from "@vue/test-utils";
import KPHeader from "../KPHeader.vue";
import { beforeEach, vi, expect, it, describe } from "vitest";

describe("KPHeader.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(KPHeader, {
      propsData: {
        title: "Test title",
      },
      global: {
        mocks: {
          $auth0: {
            user: {
              name: "Test User",
              picture: "/test-user-image.png",
            },
            logout: vi.fn(),
          },
        },
      },
    });
  });

  it("renders the header with the passed title", () => {
    const header = wrapper.find(".header");
    expect(header.exists()).toBe(true);

    const headerDescription = wrapper.find(".header-description");
    const headerTitle = headerDescription.find("h1");
    expect(headerTitle.text()).toBe("Test title");
  });

  it("renders the header options when user is logged in", () => {
    const headerOptions = wrapper.find(".header-options");
    expect(headerOptions.exists()).toBe(true);

    const userName = headerOptions.find("p");
    expect(userName.text()).toBe("Test User");

    const userPicture = headerOptions.find(".icon-large");
    expect(userPicture.attributes().src).toBe("/test-user-image.png");
  });

  it("calls logout function when logout button is clicked", () => {
    const headerOptions = wrapper.find(".header-options");
    const logoutButton = headerOptions.find("img");

    logoutButton.trigger("click");
    expect(wrapper.vm.$auth0.logout).toHaveBeenCalled();
  });
});
