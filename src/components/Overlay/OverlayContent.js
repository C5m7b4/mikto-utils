import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Popper as ReactPopper } from 'react-popper';
import { getTarget, targetPropType, DOMElement, mapToCssModules, tagPropType } from '../../utils';
import Fade from '../../Fade';

function noop() {}

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  popperClassName: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArray: PropTypes.bool,
  tag: tagPropType,
  isOpen: PropTypes.bool.isRequired,
  cssModule: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.object,
  positionFixed: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  transition: PropTypes.shape(Fade.propTypes),
};

const defaultProps = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArray: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
  onClosed: noop,
  fade: true,
  transition: {
    ...Fade.defaultProps,
  },
};

export const OverlayContent = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetNode, setTargetNode] = useState();
  const [onClosed, setOnClosed] = useState(false);

  const ref = useRef();

  const renderChildren = () => {
    const {
      cssModule,
      children,
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      arrowClassName: _arrowClassName,
      hideArray,
      popperClassName: _popperClassName,
      tag,
      container,
      modifiers,
      positionFixed,
      boundariesElement,
      onClosed,
      fade,
      transition,
      placement,
      ...attrs
    } = props;

    const arrayClassName = mapToCssModules(classNames('arrow', _arrowClassName), cssModule);
    const popperClassName = mapToCssModules(
      classNames(_popperClassName, placementPrefix ? `${placementPrefix}-auto` : ''),
      props.cssModule,
    );

    const extendedModifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacment },
      preventOverflow: { boundariesElement },
      ...modifiers,
    };

    const popperTransition = {
      ...Fade.defaultProps,
      ...transition,
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0,
    };

    return (
      <Fade {...popperTransition} {...attrs} in={isOpen} onExited={onClosed} tag={tag}>
        <ReactPopper
          referenceElement={targetNode}
          modifiers={extendedModifiers}
          placement={placement}
          positionFixed={positionFixed}
        >
          {({ ref, style, placement, outOfBoundaries, arrowProps, scheduleUpdate }) => (
            <div
              ref={ref}
              style={style}
              className={popperClassName}
              x-placement={placement}
              x-out-of-boundaries={outOfBoundaries ? 'true' : undefined}
            >
              {typeof children === 'function' ? children({ scheduleUpdate }) : children}
              {!hideArray && (
                <span ref={arrowProps.ref} className={arrowClassName} style={arrowProps.style} />
              )}
            </div>
          )}
        </ReactPopper>
      </Fade>
    );
  };

  useEffect(() => {}, []);

  const getContainerNode = () => {
    return props.container;
  };

  if (isOpen) {
    return props.container === 'inline'
      ? renderChildren()
      : ReactDOM.createPortal(<div ref={ref}>{renderChildren()}</div>, getContainerNode());
  }

  return null;
};

OverlayContent.propTypes = propTypes;
OverlayContent.defaultProps = defaultProps;
