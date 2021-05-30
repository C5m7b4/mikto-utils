import React, { useState } from "react";
import PropTypes from "prop-types";

export const Popover = ({ direction, ...props }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showPopover = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hidePopover = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="mikto-popover-wrapper"
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {/* wrapping */}
      {props.children}
      {active && (
        <div className={`mikto-popover-tip ${direction || "top"}`}>
          {/* content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

Popover.propTypes = {
  /**
   * The location for the Popup to display itself
   */
  direction: PropTypes.string,
};

Popover.defaultProps = {
  direction: "top",
};
