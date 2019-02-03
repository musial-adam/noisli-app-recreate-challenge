import React from 'react';
import PropTypes from 'prop-types';

import SoundTile from '../SoundTile/SoundTile';
import styles from './SoundBoard.module.scss';

const SoundBoard = props => {
  return (
    <div className={styles.SoundBoard}>
      <SoundTile icon="01-rain.png" alt="Rain icon" sound="01-rain.mp4" />
      <SoundTile icon="02-thunderstorm.png" alt="Thunderstorm icon" sound="02-thunderstorm.mp4" />
      <SoundTile icon="03-wind.png" alt="Wind icon" sound="03-wind.mp4" />
      <SoundTile icon="04-forest.png" alt="Forest icon" sound="04-forest.mp4" />
      <SoundTile icon="05-leaves.png" alt="Leaves icon" sound="05-leaves.mp4" />
      <SoundTile icon="06-waterstream.png" alt="Water stream icon" sound="06-waterstream.mp4" />
      <SoundTile icon="07-seaside.png" alt="Seaside icon" sound="07-seaside.mp4" />
      <SoundTile icon="08-water.png" alt="Water icon" sound="08-water.mp4" />
      <SoundTile icon="09-fire.png" alt="Fire icon" sound="09-fire.mp4" />
      <SoundTile icon="10-summernight.png" alt="Summer night icon" sound="10-summernight.mp4" />
      <SoundTile icon="11-coffee.png" alt="Coffee icon" sound="11-coffee.mp4" />
      <SoundTile icon="12-train.png" alt="Train icon" sound="12-train.mp4" />
      <SoundTile icon="13-fan.png" alt="Fan icon" sound="13-fan.mp4" />
      <SoundTile icon="14-whitenoise.png" alt="White noise icon" sound="14-whitenoise.mp4" />
      <SoundTile icon="15-pinknoise.png" alt="Pink noise icon" sound="15-pinknoise.mp4" />
      <SoundTile icon="16-brownnoise.png" alt="Brown noise icon" sound="16-brownnoise.mp4" />
    </div>
  );
};

SoundBoard.propTypes = {};

export default SoundBoard;
