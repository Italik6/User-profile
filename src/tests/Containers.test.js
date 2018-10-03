import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../store";
import Main from "../containers/Main";
import { mapDispatchToProps } from "../containers/Main";
// Create the mock store
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

describe("Main Component", () => {
  const toggleComment = jest.fn();
  const wrapper = shallow(<Main store={store} toggleComment={toggleComment} />);

  it("should render without throwing an error", () => {
    expect(wrapper.exists()).toBe(true);
  });

  beforeEach(() => {
    const initialState = {
      modal: {
        isOpen: false
      },
      commentsList: {
        isShown: true
      },
      comments: [],
      profileInfo: {}
    };
    const store = mockStore(initialState);
  });

  it("should has property isOpen = false", () => {
    expect(wrapper.props().modal).toHaveProperty("isOpen", false);
  });

  it("should has property isShown = true", () => {
    expect(wrapper.props().commentsList).toHaveProperty("isShown", true);
  });

  it("should be array and has more than 0 items", () => {
    expect(wrapper.props().comments.comments.length).toBeGreaterThan(0);
  });

  it("should be an object", () => {
    expect(typeof wrapper.props().profileInfo).toBe("object");
  });

  it("should be not call", () => {
    expect(toggleComment).not.toBeCalled();
  });
});
