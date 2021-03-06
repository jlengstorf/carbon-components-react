/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
if (!process.env.EXCLUDE_SASS) {
  import('@console/bluemix-components/consumables/scss/components/loading/loading.scss');
}

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  active: true,
};

const Loading = ({ className, active, ...other }) => {
  const isIe = window.ActiveXObject || 'ActiveXObject' in window;

  const loadingClasses = classNames(
    'bx--loading',
    className,
    {
      'bx--loading--ie': isIe,
      'bx--loading--stop': !active,
      'bx--loading--stop--ie': !active && isIe,
    },
  );

  return (
    <div {...other} className={loadingClasses}>
      <svg className="bx--loading__svg" viewBox="-75 -75 150 150">
        <circle cx="0" cy="0" r="37.5" />
      </svg>
    </div>
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
