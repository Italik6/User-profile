import * as actions from "../actions/profileActions";
import * as types from "../actions/types";

describe("actions", () => {
  it("should create an action to add a like", () => {
    const expectedAction = {
      type: types.ADD_LIKE
    };
    expect(actions.addLike()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add a follow", () => {
    const expectedAction = {
      type: types.ADD_FOLLOW
    };
    expect(actions.addFollow()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to show or hide comments", () => {
    const expectedAction = {
      type: types.TOGGLE_COMMENTS
    };
    expect(actions.toggleComments()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to open modal", () => {
    const expectedAction = {
      type: types.SHOW_MODAL
    };
    expect(actions.openModal()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to close modal", () => {
    const expectedAction = {
      type: types.HIDE_MODAL
    };
    expect(actions.closeModal()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add new comment", () => {
    const payload = {};
    const expectedAction = {
      type: types.ADD_COMMENT,
      payload
    };
    expect(actions.addComment(payload)).toEqual(expectedAction);
  });
});
