import React from "react";
import PropTypes from "prop-types";

const ProfileStats = props => {
  console.log(props);
  return (
    <div className="profile-stats-element">
      <p className="profile-stats-number orange-color">{props.stat}</p>
      <p className="profile-stats-info quinary-color">{props.desc}</p>
    </div>
  );
};

ProfileStats.propTypes = {
  stat: PropTypes.number.isRequired
};

export default ProfileStats;
