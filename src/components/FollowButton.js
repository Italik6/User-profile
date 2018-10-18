import React from "react";
import PropTypes from "prop-types";

const FollowButton = props => {
  return (
    <div
      className={
        props.addFollowedClass
          ? "profile-follow-button-active"
          : "profile-follow-button"
      }
      onClick={props.addFollow}
    >
      <p className="profile-follow-button-text">FOLLOW</p>
    </div>
  );
};

FollowButton.propTypes = {
  addFollowedClass: PropTypes.bool.isRequired,
  addFollow: PropTypes.func.isRequired
};

export default FollowButton;
