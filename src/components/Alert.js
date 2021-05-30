import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from '../utils';
import Fade from '../Fade';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
};

const defaultProps = {
  color: 'main-color-bg',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
};

export const Alert = ({
  className,
  closeClassName,
  closeAriaLabel,
  cssModule,
  tag: Tag,
  color,
  isOpen,
  toggle,
  children,
  transition,
  fade,
  innerRef,
  ...attributes
}) => {
  const classes = mapToCssModules(
    classNames(className, 'alert', `alert-${color}-bg`, { 'alert-dismissible': toggle }),
    cssModule,
  );

  const closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };
  return (
    <Fade
      {...attributes}
      {...alertTransition}
      tag={Tag}
      className={classes}
      in={isOpen}
      role="alert"
      innerRef={innerRef}
    >
      {toggle ? (
        <button type="button" className={closeClasses} aria-label={closeAriaLabel} onClick={toggle}>
          <span aria-hidden="true">&times;</span>
        </button>
      ) : null}
      {children}
    </Fade>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
