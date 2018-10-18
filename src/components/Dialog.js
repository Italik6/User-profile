import React from "react";
import PropTypes from "prop-types";

const Dialog = props => {
  return (
    <div className="backdrop">
      <div className="dialog">
        <input id="url" type="text" value={window.location} readOnly />
        <br />
        <button className="dialog-button" onClick={props.onClick}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Dialog;
