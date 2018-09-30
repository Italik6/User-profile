import reducer from "../reducers/profileReducer";
import * as types from "../actions/types";

describe("profile reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      profileInfo: {},
      comments: [],
      commentsList: true,
      modal: false
    });
  });

  it("should handle ADD_LIKE", () => {
    expect(
      reducer([], {
        type: types.ADD_LIKE
      })
    ).toEqual({
      liked: true,
      likes: NaN
    });
  });

  it("should handle ADD_FOLLOW", () => {
    expect(
      reducer([], {
        type: types.ADD_FOLLOW
      })
    ).toEqual({
      followed: true,
      followers: NaN
    });
  });

  it("should handle TOGGLE_COMMENTS", () => {
    expect(
      reducer([], {
        type: types.TOGGLE_COMMENTS
      })
    ).toEqual({
      isShown: true
    });
  });

  it("should handle SHOW_MODAL", () => {
    expect(
      reducer([], {
        type: types.SHOW_MODAL
      })
    ).toEqual({
      isOpen: true
    });
  });

  it("should handle HIDE_MODAL", () => {
    expect(
      reducer([], {
        type: types.HIDE_MODAL
      })
    ).toEqual({
      isOpen: false
    });
  });

  it("should handle ADD_COMMENT", () => {
    expect(
      reducer([], {
        type: types.ADD_COMMENT
      })
    ).toEqual([]);
  });
});
