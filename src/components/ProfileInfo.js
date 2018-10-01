import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import Dialog from "./Dialog";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className="profile">
        <img
          className="profile-image profile-picture"
          src={this.props.picture}
          alt="Profile"
        />
        <div className="profile-info">
          <p className="profile-info-name burgundy-color">
            {this.props.name}
            <FontAwesome
              name="heart-o"
              className={
                this.props.addLikedClass
                  ? "profile-like-button orange-color"
                  : "profile-like-button senary-color"
              }
              onClick={this.props.addLike}
            />
          </p>
          <p className="profile-info-location quinary-color">
            {this.props.location}
          </p>
        </div>
        <FontAwesome
          name="share-square-o"
          className="profile-share-button share-button orange-color"
          onClick={this.props.openModal}
        />
        <div className="profile-stats">
          <div className="profile-stats-element">
            <p className="profile-stats-number orange-color">
              {this.props.likes}
            </p>
            <p className="profile-stats-info quinary-color">Likes</p>
          </div>
          <div className="profile-stats-element">
            <p className="profile-stats-number orange-color">
              {this.props.following}
            </p>
            <p className="profile-stats-info quinary-color">Following</p>
          </div>
          <div className="profile-stats-element">
            <p className="profile-stats-number orange-color">
              {this.props.followers}
            </p>
            <p className="profile-stats-info quinary-color">Followers</p>
          </div>
        </div>
        <div
          className={
            this.props.addFollowedClass
              ? "profile-follow-button-active"
              : "profile-follow-button"
          }
          onClick={this.props.addFollow}
        >
          <p className="profile-follow-button-text">FOLLOW</p>
        </div>
        {/* Dialog section */}
        {this.props.show ? <Dialog onClick={this.props.closeModal} /> : null}
      </div>
    );
  }
}

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired
};

export default ProfileInfo;
