import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  let today = new Date();
  let commentDate = new Date(props.date);
  let diffDays = Math.round(
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
      <p className="comment-date burgundy-color">{diffDays + "d"}</p>
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
