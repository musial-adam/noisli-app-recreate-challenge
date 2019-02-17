import React from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.scss';

const Slider = props => {
  const { sliderPos } = props;
  return (
    <>
      <div className={styles.Slider}>
        <div
          className={styles.SliderControl}
          style={{ left: `${sliderPos}px` }}
        />
      </div>
    </>
  );
};

Slider.propTypes = {
  sliderPos: PropTypes.number.isRequired,
};

export default Slider;
