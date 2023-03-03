import React from "react";
import PropTypes from "prop-types";

const GeneralButton = React.memo(
  ({ buttonText, buttonIcon, buttonFirstIcon, styleName }) => {
    return (
      <>
        <button className={styleName}>
          <span className="generalButtonFirstIcon">{buttonFirstIcon}</span>
          &nbsp;
          {buttonText} &nbsp;{" "}
          <span className="generalButtonIcon">{buttonIcon}</span>
        </button>
      </>
    );
  }
);

GeneralButton.propTypes = {
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.object,
  buttonFirstIcon: PropTypes.object,
  styleName: PropTypes.string,
};

export default GeneralButton;
