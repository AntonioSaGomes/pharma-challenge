import { mount } from "@vue/test-utils";
import PostList from "../PostList.vue";

import { User } from "../../../models/User";
import { describe, beforeEach, it, expect } from "vitest";
import { MOCK_USER } from "../../../mocks/mockData";

describe("PostList", () => {
  let wrapper: any;

  const user: User = MOCK_USER;

  beforeEach(() => {
    wrapper = mount(PostList, {
      propsData: {
        user: user,
      },
      global: {
        mocks: {
          $route: {
            params: {
              userId: 1,
            },
          },
        },
      },
      /* stubs: {
        UserPost,
      }, */
    });
  });

  it("displays the correct title", () => {
    const title = wrapper.find('[data-testid="posts-user-name"]');
    expect(title.text()).toBe(`Posts`);
  });
});
