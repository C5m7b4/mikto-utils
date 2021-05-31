import PropTypes from 'prop-types';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to `' +
        componentName +
        '`. Expected prop to be an instance of Element. Validation Failed',
    );
  }
}

export const targetPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  DOMElement,
  PropTypes.shape({ current: PropTypes.any }),
]);

export function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || (canUseDOM && typeof els.length === 'number');
}

export function getTarget(target, allElements) {
  const els = findDomElements(target);
  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }
    if (els === null) {
      return [];
    }
    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }
    return els;
  }
}

let globalCssModule;

export function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

export function mapToCssModules(className = '', cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
}

export const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]),
  ),
]);

/**
 *
 * @param {*} obj
 * @param {*} omitKeys
 * @returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 *
 * @param {*} obj
 * @param {*} keys
 * @returns a filtered copy of an object with only the specified keys
 */
export function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let length = pickKeys.length;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}

export const TransitionTimeouts = {
  Fade: 150,
  Collapse: 350,
  Modal: 300,
  Carousel: 600,
};

// Duplicated transition.propType keys to ensure that it builds
// for distribution properly exclude these keys for nested child HTML attributes
// sing `react-transition-group` removes propTypes in production builds
export const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited',
];

let warned = {};
export function warnOnce(message) {
  if (!warned[message]) {
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    warned[message] = true;
  }
}
