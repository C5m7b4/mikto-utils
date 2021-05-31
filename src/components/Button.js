import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from '../utils';

const propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  close: PropTypes.bool,
};

const defaultProps = {
  color: 'main-color',
  tag: 'button',
};

export const Button = ({
  active,
  'aria-label': ariaLabel,
  block,
  className,
  close,
  cssModule,
  color,
  outline,
  size,
  tag: Tag,
  innerRef,
  disabled,
  ...attributes
}) => {
  if (close && typeof attributes.children === 'undefined') {
    attributes.children = <span aria-hidden>x</span>;
  }

  const btnOutlineColor = `btn${outline ? '-outline' : ''}`;

  const classes = mapToCssModules(
    classNames(
      'btn',
      `btn-${color}`,
      //   close || btnOutlineColor,
      //   outline ? `btn-outline-${color}` : false,
      //   size ? `btn-${size}` : false,
      //   block ? 'btn-block' : false,
      //   { active, disabled: disabled },
    ),
    cssModule,
  );

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  const defaultAriaLabel = close ? 'Close' : null;

  const click = e => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    return onClick(e);
  };

  return (
    <Tag
      type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
      {...attributes}
      className={classes}
      ref={innerRef}
      onClick={click}
      aria-label={ariaLabel || defaultAriaLabel}
    />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
