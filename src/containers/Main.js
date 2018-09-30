import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ProfileInfo from "../components/ProfileInfo";
import CommentList from "../components/CommentList";
import AddComment from "../components/AddComment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addLike,
  addFollow,
  toggleComments,
  openModal,
  closeModal,
  addComment
} from "../actions/profileActions";

class Main extends React.Component {
  toggleComments = () => {
    this.props.toggleComments();
  };

  toggleLike = () => {
    this.props.addLike();
  };

  toggleFollow = () => {
    this.props.addFollow();
  };

  showModal = () => {
    this.props.openModal();
  };

  hideModal = () => {
    this.props.closeModal();
  };

  addComment = e => {
    e.preventDefault();
    let newComment = {
      id: this.props.comments.comments.length + 2,
      author: {
        picture: "https://i.imgur.com/xYB5wii.jpg",
        name: "John Smith"
      },
      date: new Date(),
      content: e.target[0].value
    };

    this.props.addComment(newComment);
    e.target[0].value = " ";
  };

  render() {
    let hintText = "Add a comment";
    const { profileInfo, commentsList, modal, comments } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div
            className={commentsList.isShown ? "container" : "container-hidden"}
          >
            <div className="container-up" />
            <ProfileInfo
              name={profileInfo.name}
              location={profileInfo.location}
              picture={profileInfo.picture}
              likes={profileInfo.likes}
              following={profileInfo.following}
              followers={profileInfo.followers}
              addLikedClass={profileInfo.liked}
              addFollowedClass={profileInfo.followed}
              addLike={this.toggleLike}
              addFollow={this.toggleFollow}
              show={modal.isOpen}
              openModal={this.showModal}
              closeModal={this.hideModal}
            />
            <div
              className={commentsList.isShown ? "comments" : "comments-hidden"}
            >
              <p
                className="orange-color comments-hide"
                onClick={this.toggleComments}
              >
                Hide comments ({comments.comments.length})
              </p>
              <CommentList
                comments={comments.comments}
                isShown={commentsList.isShown}
              />
              <AddComment addComment={this.addComment} hintText={hintText} />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

// connect react with redux
const mapStateToProps = state => ({
  profileInfo: state.profileInfo,
  comments: state.comments,
  commentsList: state.commentsList,
  modal: state.modal
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addLike, addFollow, toggleComments, openModal, closeModal, addComment },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
