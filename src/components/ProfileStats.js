import React from "react";
import PropTypes from "prop-types";

const ProfileStats = props => {
  return (
    <div className="profile-stats">
      <div className="profile-stats-element">
        <p className="profile-stats-number orange-color">{props.likes}</p>
        <p className="profile-stats-info quinary-color">Likes</p>
      </div>
      <div className="profile-stats-element">
        <p className="profile-stats-number orange-color">{props.following}</p>
        <p className="profile-stats-info quinary-color">Following</p>
      </div>
      <div className="profile-stats-element">
        <p className="profile-stats-number orange-color">{props.followers}</p>
        <p className="profile-stats-info quinary-color">Followers</p>
      </div>
    </div>
  );
};

ProfileStats.propTypes = {
  likes: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired
};

export default ProfileStats;
