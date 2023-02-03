import { mount } from "@vue/test-utils";
import { describe, it, vi, expect } from "vitest";
import router from "../../../router";
import MainContainer from "../MainContainer.vue";

describe("MainContainer", () => {
  it("renders the back button if `isUserPage` is true", () => {
    const wrapper = mount(MainContainer, {
      global: {
        plugins: [router],
        mocks: {
          $route: {
            params: {
              userId: 1,
            },
          },
        },
      },
    });
    expect(wrapper.find(".back-btn").exists()).toBe(true);
  });

  it("does not render the back button if `isUserPage` is false", () => {
    const wrapper = mount(MainContainer, {
      global: {
        plugins: [router],
        mocks: {
          $route: {
            params: {},
          },
        },
      },
    });

    expect(wrapper.find(".back-btn").exists()).toBe(false);
  });

  it("calls `$router.go(-1)` when the back button is clicked", () => {
    const $router = {
      go: vi.fn(),
    };

    const wrapper = mount(MainContainer, {
      global: {
        plugins: [router],
        mocks: {
          $route: {
            params: {
              userId: 1,
            },
          },
          $router,
        },
      },
    });

    wrapper.find(".back-btn").trigger("click");

    expect($router.go).toHaveBeenCalledWith(-1);
  });
});
