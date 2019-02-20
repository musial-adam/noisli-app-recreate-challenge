//! Work on <track> for audio files!
//! Work on <img role="button" /> - not good practise!

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SoundTile.module.scss';

import SoundSlider from '../SoundSlider/SoundSlider';

export class SoundTile extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
  };

  state = {
    on: false,
    volume: 0.5,
  };

  // togglePlay = () => {
  //   const { on, volume } = this.state;
  //   const { sound } = this.props;

  //   const soundHook = document.getElementById(sound);
  //   if (on) {
  //     soundHook.pause();
  //   } else {
  //     soundHook.currentTime = 0;
  //     soundHook.volume = volume;
  //     soundHook.play();
  //   }
  // };

  toggleHandler = () => {
    // this.togglePlay();
    this.setState(state => {
      return { on: !state.on };
    });
  };

  handleKeyPress = event => {
    // let { volume, sliderPos } = this.state;
    // const { sound } = this.props;
    // const soundHook = document.getElementById(sound);
    if (event.keyCode === 32) {
      event.preventDefault();
      this.toggleHandler();
    }
    // if ((event.keyCode === 38 || event.keyCode === 39) && volume < 1) {
    //   event.preventDefault();
    //   volume += 0.01;
    //   volume = parseFloat(volume.toPrecision(2));
    //   soundHook.volume = volume;
    //   sliderPos = volume * 200;
    //   // sliderPos = parseInt(sliderPos.toPrecision(0));
    //   console.log(`sliderPos: ${sliderPos}`);
    //   // console.log(volume);
    //   this.setState({ volume, sliderPos });
    // }
    // if ((event.keyCode === 37 || event.keyCode === 40) && volume > 0) {
    //   event.preventDefault();
    //   volume -= 0.01;
    //   volume = parseFloat(volume.toPrecision(2));
    //   soundHook.volume = volume;
    //   sliderPos = volume * 200;
    //   // console.log(volume);
    //   this.setState({ volume, sliderPos });
    // }
  };

  render() {
    const { on } = this.state;
    const { alt, icon, sound } = this.props;

    const SoundButton = (
      <img
        role="button"
        onClick={this.toggleHandler}
        onKeyDown={this.handleKeyPress}
        tabIndex={0}
        src={`./assets/icons/${icon}`}
        alt={alt}
        style={on ? { opacity: 1 } : { opacity: 0.5 }}
      />
    );

    return (
      <div className={styles.SoundTile}>
        {SoundButton}
        {on ? (
          <>
            {/* {SoundButton} */}
            <SoundSlider sound={sound} on={on} />
          </>
        ) : (
          <>
            {/* {SoundButton} */}
            {/* <SoundSlider sound={sound} style={{ opacity: 0.3 }} /> */}
          </>
        )}
        {/* <audio id={sound} preload="auto" loop>
          <track default kind="captions" />
          <source src={`./assets/sounds/${sound}`} type="audio/mp4" />
          Your browser does not support the <code>audio</code> element.
        </audio> */}
      </div>
    );
  }
}

export default SoundTile;
