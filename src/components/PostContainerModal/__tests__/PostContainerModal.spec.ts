import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeAll } from "vitest";

import PostContainerModal from "../PostContainerModal.vue";

describe("PostContainerModal component", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(PostContainerModal);
  });

  it("disables the submit button if the form is empty", () => {
    expect(wrapper.find("button").element.disabled).toBe(true);
  });

  it("enables the submit button if the form is filled out", async () => {
    await wrapper.setData({ title: "Test Title", body: "Test Body" });

    expect(wrapper.find("button").element.disabled).toBe(false);
  });

  /* it("emits the 'newPost' event with the correct data when the submit button is clicked", async () => {
    wrapper.setData({ title: "Test Title", body: "Test Body" });
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("newPost")).toHaveLength(1);
    expect(wrapper.emitted("newPost")[0][0]).toEqual({
      body: "Test Body",
      title: "Test Title",
      userId: 10,
    });
  }); */
});
