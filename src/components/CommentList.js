import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";


const CommentList = props => {
  // sort comments by date
  function compare(a, b) {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  }
  props.comments.sort(compare);

  const listComments = props.comments.map(comment => (
    <Comment
      key={comment.id}
      name={comment.author.name}
      picture={comment.author.picture}
      date={comment.date}
      body={comment.content}
    />
  ));
  if (!props.isShown) return null;
  return (
    <div className="comments-list">
      <ul className="comments-list-ul">{listComments}</ul>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isShown: PropTypes.bool.isRequired
};

export default CommentList;
