import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const today = new Date();
  const commentDate = new Date(props.date);
  const diffDays = Math.round(
    Math.abs((today.getTime() - commentDate.getTime()) / oneDay)
  );

  return (
    <div className="comment">
      <img
        className="comment-image profile-image"
        src={props.picture}
        alt={props.name}
      />
      <p className="comment-name burgundy-color">{props.name}</p>
      <p className="comment-date">{diffDays + "d"}</p>
      <p className="comment-content comment-color">{props.body}</p>
    </div>
  );
};

Comment.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Comment;
