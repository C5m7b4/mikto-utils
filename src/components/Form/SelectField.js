import React from "react";
import PropTypes from "prop-types";

export const SelectField = ({
  error,
  id,
  label,
  onChange,
  name,
  emptyMsg,
  data,
  valueField,
  displayField,
}) => {
  let wrapperClass = "form-group";
  if (error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <select
          id={id}
          onChange={onChange}
          name={name}
          className="form-control"
        >
          <option key="0" value={0}>
            {emptyMsg}
          </option>
          {data.length === 0
            ? null
            : data.map((item, index) => (
                <option key={index} value={parseInt(item[valueField])}>
                  {item[displayField]}
                </option>
              ))}
        </select>
      </div>
      {error.length === 0 ? null : (
        <div className="alert alert-danger">{error}</div>
      )}
    </div>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  valueField: PropTypes.string.isRequired,
  displayField: PropTypes.string.isRequired,
  data: PropTypes.array,
  value: PropTypes.number,
  error: PropTypes.string,
  emptyMsg: PropTypes.string,
};

SelectField.defaultProps = {
  error: "",
  emptyMsg: "",
};
