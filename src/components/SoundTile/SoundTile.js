import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SoundTile.module.scss';

import Slider from '../Slider/Slider';

//! Work on <track> for audio files!

export class SoundTile extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
  };

  state = {
    on: false,
  };

  // componentDidMount() {
  //   document.addEventListener('keypress', this.handleKeyPress);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keypress', this.handleKeyPress);
  // }

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
    return (
      <div
        className={styles.SoundTile}
        onClick={this.toggleHandler}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
      >
        {on ? (
          <>
            <img src={`./assets/icons/${icon}`} alt={alt} />
            <Slider />
          </>
        ) : (
          <img
            src={`./assets/icons/${icon}`}
            alt={alt}
            style={{ opacity: 0.5 }}
          />
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
