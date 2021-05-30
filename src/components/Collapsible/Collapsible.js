import React from "react";
import PropTypes from "prop-types";

export const Collapsible = ({ label, ...props }) => {
  return (
    <div className="wrap-collapsible">
      <input id="collapsible" className="toggle-collapsible" type="checkbox" />
      <label htmlFor="collapsible" className="lbl-toggle-collapsible">
        {label}
      </label>
      <div className="collapsible-content">
        <div className="inner-content-collapsible">{props.children}</div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

Collapsible.defaultProps = {
  label: "Expand me",
};
