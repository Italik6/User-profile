import React from "react";
import { shallow } from "enzyme";
import Dialog from "../components/Dialog";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";

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

describe("AddComment Component", () => {
  const addComment = jest.fn();
  const hintText = "";
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <AddComment addComment={addComment} hintText={hintText} />
      ).exists()
    ).toBe(true);
  });
});

describe("Comment Component", () => {
  const comment = {
    id: 0,
    author: {
      name: "",
      picture: ""
    },
    date: Date,
    content: ""
  };
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Comment
          key={comment.id}
          name={comment.author.name}
          picture={comment.author.picture}
          date={comment.date}
          body={comment.content}
        />
      ).exists()
    ).toBe(true);
  });
});

describe("CommentList Component", () => {
  const comments = {
    comments: []
  };
  const commentsList = {
    isShown: false
  };
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <CommentList
          comments={comments.comments}
          isShown={commentsList.isShown}
        />
      ).exists()
    ).toBe(true);
  });
});
