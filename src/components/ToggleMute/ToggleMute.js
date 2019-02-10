import React, { Component } from 'react';
import styles from './ToggleMute.module.scss';

export class ToggleMute extends Component {
  state = {
    on: true,
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  toggleHandler = () => {
    this.setState(state => {
      return { on: !state.on };
    });
  };

  handleKeyPress = event => {
    if (event.key === 'm' || event.key === 'M') {
      this.toggleHandler();
    }
  };

  render() {
    const { on } = this.state;
    return (
      <div
        className={styles.ToggleMute}
        onClick={this.toggleHandler}
        onKeyPress={this.handleKey}
        title="Click or press M to mute/unmute"
        role="button"
        tabIndex={0}
      >
        {on ? (
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
