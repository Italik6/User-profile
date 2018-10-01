import profileReducer from "../reducers/profileReducer";
import modalReducer from "../reducers/modalReducer";
import commentsReducer from "../reducers/commentsReducer";
import * as types from "../actions/types";

describe("profile reducer", () => {
  it("should return the initial state", () => {
    expect(profileReducer(undefined, {})).toEqual({
      profileInfo: {}
    });
  });

  it("should handle ADD_LIKE", () => {
    expect(
      profileReducer([], {
        type: types.ADD_LIKE
      })
    ).toEqual({
      liked: true,
      likes: NaN
    });
  });

  it("should handle ADD_FOLLOW", () => {
    expect(
      profileReducer([], {
        type: types.ADD_FOLLOW
      })
    ).toEqual({
      followed: true,
      followers: NaN
    });
  });
});

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(modalReducer(undefined, {})).toEqual({
      modal: false
    });
  });
  it("should handle SHOW_MODAL", () => {
    expect(
      modalReducer([], {
        type: types.SHOW_MODAL
      })
    ).toEqual({
      isOpen: true
    });
  });

  it("should handle HIDE_MODAL", () => {
    expect(
      modalReducer([], {
        type: types.HIDE_MODAL
      })
    ).toEqual({
      isOpen: false
    });
  });
});

describe("comments reducer", () => {
  it("should return the initial state", () => {
    expect(commentsReducer(undefined, {})).toEqual({
      comments: [],
      commentsList: true
    });
  });
  it("should handle TOGGLE_COMMENTS", () => {
    expect(
      commentsReducer([], {
        type: types.TOGGLE_COMMENTS
      })
    ).toEqual({
      isShown: true
    });
  });
  it("should handle ADD_COMMENT", () => {
    expect(
      commentsReducer([], {
        type: types.ADD_COMMENT
      })
    ).toEqual([]);
  });
});
