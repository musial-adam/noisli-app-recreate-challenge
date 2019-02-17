import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.scss';

export class Slider extends Component {
  static propTypes = {};

  state = {
    position: 0,
  };

  constructor(props) {
    super(props);
    this.SliderRef = React.createRef();
    this.ControlRef = React.createRef();
  }

  handleKeyPress = event => {
    let { position } = this.state;

    console.log('aloha');

    if ((event.keyCode === 38 || event.keyCode === 39) && position <= 200) {
      event.preventDefault();
      position += 2;
      this.setState({ position });
    }
    if ((event.keyCode === 37 || event.keyCode === 40) && position >= 0) {
      event.preventDefault();
      position -= 2;
      this.setState({ position });
    }
  };

  handleMouseClick = event => {
    const divHook = this.SliderRef.current;
    const position = event.clientX - divHook.offsetLeft;
    if (position >= 0 && position <= 200) {
      this.setState({ position });
    }
  };

  handleMouseDown = event => {
    console.log(event.button);
  };

  render() {
    const { position } = this.state;
    return (
      <>
        <div
          role="slider"
          aria-valuemin={0}
          aria-valuemax={200}
          aria-valuenow={position}
          tabIndex={0}
          className={styles.Slider}
          onKeyDown={this.handleKeyPress}
          onClick={this.handleMouseClick}
          ref={this.SliderRef}
        >
          <div
            className={styles.SliderControl}
            style={{ left: `${position}px` }}
            onMouseDown={this.handleMouseDown}
            ref={this.ControlRef}
          />
        </div>
      </>
    );
  }
}

export default Slider;
