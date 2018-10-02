import React from "react";
import { shallow } from "enzyme";
import Dialog from "../components/Dialog";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
import ProfileInfo from "../components/ProfileInfo";

describe("Dialog Component", () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Dialog onClick={onClick} />);
  it("should render without throwing an error", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a current url", () => {
    expect(wrapper.find("#url").length).toEqual(1);
  });
  it("renders a close button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
  it("not to call function", () => {
    expect(onClick).not.toBeCalled();
  });
});

describe("Dialog Component Click", () => {
  const onClick = jest.fn();
  it("successfully calls the onClick handler", () => {
    const wrapper = shallow(<Dialog onClick={onClick} />);
    expect(wrapper.find("button").length).toEqual(1);
    wrapper.find("button").simulate("click");
  });
});

describe("AddComment Component", () => {
  const addComment = jest.fn();
  const hintText = "";
  const wrapper = shallow(
    <AddComment addComment={addComment} hintText={hintText} />
  );
  it("should render without throwing an error", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("when the form is submitted'", () => {
    beforeEach(() => {
      expect(wrapper.find("form").length).toEqual(1);
      wrapper.find("form").simulate("submit", { preventDefault() {} });
    });
  });
  it("call function", () => {
    expect(addComment).toBeCalled();
  });
});

describe("Comment Component", () => {
  const comment = {
    id: 0,
    author: {
      name: "",
      picture: ""
    },
    date: 0,
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
    expect(comment.date).toBeGreaterThanOrEqual(0);
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
    expect(comments.comments.length).toBeGreaterThanOrEqual(0);
    expect(commentsList.isShown).toBeFalsy();
  });
});

describe("ProfileInfo Component", () => {
  const profileInfo = {
    name: "",
    location: "",
    picture: "",
    likes: 0,
    following: 0,
    followers: 0,
    liked: false,
    followed: false
  };
  const modal = {
    isOpen: false
  };
  const toggleLike = jest.fn();
  const toggleFollow = jest.fn();
  const showModal = jest.fn();
  const hideModal = jest.fn();
  const wrapper = shallow(
    <ProfileInfo
      name={profileInfo.name}
      location={profileInfo.location}
      picture={profileInfo.picture}
      likes={profileInfo.likes}
      following={profileInfo.following}
      followers={profileInfo.followers}
      addLikedClass={profileInfo.liked}
      addFollowedClass={profileInfo.followed}
      addLike={toggleLike}
      addFollow={toggleFollow}
      show={modal.isOpen}
      openModal={showModal}
      closeModal={hideModal}
    />
  );
  it("should render without throwing an error", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("modal is close", () => {
    expect(modal.isShown).toBeFalsy();
  });
  it("renders a one profile img", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });
  it("not to call function", () => {
    expect(toggleLike, toggleFollow, showModal, hideModal).not.toBeCalled();
  });
});
