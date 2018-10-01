import React from "react";
import { shallow } from "enzyme";
import Dialog from "../components/Dialog";

describe("Dialog Component", () => {
  const onClick = jest.fn();
  it("should render without throwing an error", () => {
    expect(shallow(<Dialog onClick={onClick} />).exists()).toBe(true);
  });
  it("renders a current url", () => {
    expect(shallow(<Dialog onClick={onClick} />).find("#url").length).toEqual(
      1
    );
  });
});
