import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleMute.module.scss';

export class ToggleMute extends Component {
  static propTypes = {};

  state = {
    on: true
  };

  toggleHandler = () => {
    this.setState((state, props) => {
      return { on: !state.on };
    });
  };

  render() {
    return (
      <div className={styles.ToggleMute} onClick={this.toggleHandler}>
        {this.state.on ? (
          <>
            <img
              src="./assets/icons/00-unmute.png"
              alt="Unmute icon"
              style={{ opacity: 0.5 }}
            />
          </>
        ) : (
          <img src="./assets/icons/00-mute.png" alt="Mute icon" />
        )}
      </div>
    );
  }
}

export default ToggleMute;
