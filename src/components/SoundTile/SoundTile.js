//! Work on <track> for audio files!
//! Work on <img role="button" /> - not good practise!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SoundTile.module.scss';

import Slider from '../Slider/Slider';

export class SoundTile extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
  };

  state = {
    on: false,
  };

  toggleHandler = () => {
    this.togglePlay();
    this.setState(state => {
      return { on: !state.on };
    });
  };

  handleKeyPress = event => {
    if (event.key === ' ') {
      event.preventDefault();
      this.toggleHandler();
    }
  };

  togglePlay = () => {
    const { on } = this.state;
    const { sound } = this.props;

    const soundHook = document.getElementById(sound);
    if (on) {
      soundHook.pause();
    } else {
      soundHook.currentTime = 0;
      soundHook.play();
    }
  };

  render() {
    const { on } = this.state;
    const { alt, icon, sound } = this.props;

    const SoundButton = (
      <img
        role="button"
        onClick={this.toggleHandler}
        onKeyPress={this.handleKeyPress}
        tabIndex={0}
        src={`./assets/icons/${icon}`}
        alt={alt}
        style={on ? { opacity: 1 } : { opacity: 0.5 }}
      />
    );

    return (
      <div className={styles.SoundTile}>
        {on ? (
          <>
            {SoundButton}
            <Slider />
          </>
        ) : (
          <>{SoundButton}</>
        )}
        <audio id={sound} preload="auto" loop>
          <track default kind="captions" />
          <source src={`./assets/sounds/${sound}`} type="audio/mp4" />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

export default SoundTile;
