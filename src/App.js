import React, { Component } from 'react';
import './App.scss';

import ToggleMute from './components/ToggleMute/ToggleMute';
import SoundBoard from './components/SoundBoard/SoundBoard';
import SoundTile from './components/SoundTile/SoundTile';
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Noisli</h1>
        <h2>
          Improve focus and boost your productivity.
          <br />
          Mix different sounds and create your perfect environment.
        </h2>
        <ToggleMute />
        <Button>Random</Button>
        <Button>Productivity</Button>
        <Button>Relax</Button>
        <SoundBoard />
        {/* <SoundTile icon="01-rain.png" alt="Rain icon" sound="01-rain.mp4" /> */}
      </div>
    );
  }
}

export default App;
