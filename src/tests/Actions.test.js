import { addLike, addFollow } from "../actions/profileActions";
import { openModal, closeModal } from "../actions/modalActions";
import { toggleComments, addComment } from "../actions/commentsActions";
import * as types from "../actions/types";

describe("actions", () => {
  it("should create an action to add a like", () => {
    const expectedAction = {
      type: types.ADD_LIKE
    };
    expect(addLike()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add a follow", () => {
    const expectedAction = {
      type: types.ADD_FOLLOW
    };
    expect(addFollow()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to show or hide comments", () => {
    const expectedAction = {
      type: types.TOGGLE_COMMENTS
    };
    expect(toggleComments()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to open modal", () => {
    const expectedAction = {
      type: types.SHOW_MODAL
    };
    expect(openModal()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to close modal", () => {
    const expectedAction = {
      type: types.HIDE_MODAL
    };
    expect(closeModal()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add new comment", () => {
    const payload = {};
    const expectedAction = {
      type: types.ADD_COMMENT,
      payload
    };
    expect(addComment(payload)).toEqual(expectedAction);
  });
});
