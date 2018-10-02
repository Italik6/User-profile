import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../store";
import Main from "../containers/Main";

describe("Main Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Main />
        </Provider>
      ).exists()
    ).toBe(true);
  });
});
