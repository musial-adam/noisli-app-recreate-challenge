import React from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.scss';

const Slider = props => {
  return (
    <div className={styles.SliderContainer}>
      <div className={styles.Slider}>
        <div className={styles.SliderControl} />
      </div>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
