import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = props => {
  const { children } = props;
  return (
    <button type="button" className={styles.Button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
