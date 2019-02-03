import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SoundTile.module.scss';

import Slider from '../Slider/Slider';

export class SoundTile extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired
  };

  state = {
    on: false
  };

  toggleHandler = () => {
		this.togglePlay();
    this.setState((state, props) => {
      return { on: !state.on };
    });
	};
	
	togglePlay = () => {
		const sound = document.getElementById(this.props.sound);
		if (this.state.on) {
			sound.pause();
		}
		else {
			sound.currentTime = 0;
			sound.play();
		}
	}

  render() {
    return (
      <div className={styles.SoundTile} onClick={this.toggleHandler}>
        {this.state.on ? (
          <>
            <img
              src={`./assets/icons/${this.props.icon}`}
              alt={this.props.alt}
            />
            <Slider />
          </>
				) : (
          <img
            src={`./assets/icons/${this.props.icon}`}
            alt={this.props.alt}
            style={{ opacity: 0.5 }}
          />
        )}
        <audio id={this.props.sound} preload="auto" loop>
        {/* <audio id={this.props.sound} preload="auto" loop controls> */}
          <source
            src={`./assets/sounds/${this.props.sound}`}
            type="audio/mp4"
          />
					Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

export default SoundTile;
