import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from '../utils';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span',
};

export const Badge = ({ className, cssModule, color, innerRef, pill, tag: Tag, ...attributes }) => {
  const classes = mapToCssModules(
    classNames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false),
    cssModule,
  );

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return <Tag {...attributes} className={classes} ref={innerRef} />;
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
