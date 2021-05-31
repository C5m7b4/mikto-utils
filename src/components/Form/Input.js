import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, warnOnce, tagPropType } from '../../utils';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, propTypes.func, PropTypes.string]),
  plainText: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  type: 'text',
};

export const Input = ({
  className,
  cssModule,
  type,
  bsSize,
  valid,
  invalid,
  tag,
  addon,
  plainText,
  innerRef,
  ...attributes
}) => {
  return <h1>Input</h1>;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
