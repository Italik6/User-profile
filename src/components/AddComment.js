import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

const underlineStyle = {
  borderColor: "#ffa726"
};

const AddComment = props => (
  <div className="comments-add">
    <form onSubmit={props.addComment}>
      <TextField
        fullWidth
        underlineFocusStyle={underlineStyle}
        hintText={props.hintText}
      />
    </form>
  </div>
);

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  hintText: PropTypes.string.isRequired
};

export default AddComment;
