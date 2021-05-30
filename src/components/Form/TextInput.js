import React from "react";
import PropTypes from "prop-types";

export const TextInput = ({
  error,
  id,
  label,
  type,
  onChange,
  name,
  value,
  placeholder,
  readOnly,
}) => {
  let wrapperClass = "form-group";
  if (error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          id={id}
          type={type}
          onChange={onChange}
          name={name}
          className="form-control"
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  readOnly: PropTypes.bool,
};

TextInput.defaultProps = {
  error: "",
  type: "text",
  readOnly: false,
};
