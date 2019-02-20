import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SoundSlider.module.scss';

class SoundSlider extends Component {
  static propTypes = {
    sound: PropTypes.string.isRequired,
  };

  state = {
    position: 100,
    mouseDown: false,
    volume: 0.5,
  };

  constructor(props) {
    super(props);
    this.SliderRef = React.createRef();
  }

  componentDidMount() {
    const { volume } = this.state;
    const { sound } = this.props;
    const soundHook = document.getElementById(sound);
    soundHook.currentTime = 0;
    soundHook.volume = volume;
    soundHook.play();
  }

  componentWillUnmount() {
    const { sound } = this.props;
    const soundHook = document.getElementById(sound);
    soundHook.pause();
  }

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

  handleKeyPress = event => {
    let { position, volume } = this.state;
    const { sound } = this.props;
    const soundHook = document.getElementById(sound);

    if ((event.keyCode === 38 || event.keyCode === 39) && position <= 200) {
      event.preventDefault();
      position += 2;
      volume += 0.01;
      volume = parseFloat(volume.toPrecision(2));
      soundHook.volume = volume;
      this.setState({ position, volume });
    }
    if ((event.keyCode === 37 || event.keyCode === 40) && position >= 0) {
      event.preventDefault();
      position -= 2;
      volume -= 0.01;
      volume = parseFloat(volume.toPrecision(2));
      soundHook.volume = volume;
      this.setState({ position, volume });
    }
  };

  handleMouseClick = event => {
    const divHook = this.SliderRef.current;
    const position = event.clientX - divHook.offsetLeft;
    const { sound } = this.props;
    const soundHook = document.getElementById(sound);

    if (position >= 0 && position <= 200) {
      let volume = position / 200;
      volume = parseFloat(volume.toPrecision(2));
      soundHook.volume = volume;
      this.setState({ position, volume });
    }
  };

  handleMouseMove = event => {
    const { mouseDown } = this.state;
    if (mouseDown) {
      const divHook = this.SliderRef.current;
      const position = event.clientX - divHook.offsetLeft;
      const { sound } = this.props;
      const soundHook = document.getElementById(sound);
      if (position >= 0 && position <= 200) {
        let volume = position / 200;
        volume = parseFloat(volume.toPrecision(2));
        soundHook.volume = volume;
        console.log(volume);
        this.setState({ position, volume });
      }
    }
  };

  handleMouseDown = event => {
    this.handleMouseClick(event);
    this.setState({ mouseDown: true });
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseUp = () => {
    this.setState({ mouseDown: false });
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  };

  render() {
    const { position } = this.state;
    const { sound, on } = this.props;
    return (
      <>
        <div
          role="slider"
          aria-valuemin={0}
          aria-valuemax={200}
          aria-valuenow={position}
          tabIndex={0}
          className={styles.SoundSlider}
          onKeyDown={this.handleKeyPress}
          onClick={this.handleMouseClick}
          onMouseDown={this.handleMouseDown}
          ref={this.SliderRef}
        >
          <div
            role="presentation"
            className={styles.SoundSliderControl}
            style={{ left: `${position}px` }}
            onMouseDown={this.handleMouseDown}
          />
        </div>
        <audio id={sound} preload="auto" loop>
          <track default kind="captions" />
          <source src={`./assets/sounds/${sound}`} type="audio/mp4" />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </>
    );
  }
}

export default SoundSlider;
