import React from 'react';
import { render } from 'react-dom';
import {
  RAudioContext,
  RGain,
  RMediaElementSource,
  RPipeline,
} from './r-audio-index.js';

export default class ShoutingChildren extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
    this.audio = new Audio('/assets/audio/children-shouting.mp3');
    this.audio.autoplay = true;
    this.audio.loop = true;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <RAudioContext debug={true}>
        <label>
          Transmission Loss (dB):<span> </span>
          <input type="number" id="dbl" className="control-dbl" data-action="dbl" value={this.state.value} onChange={this.handleChange} />
        </label>
        <RPipeline>
          <RMediaElementSource element={this.audio} />
          <RGain gain={(Math.pow(10, (this.state.value / 20))).toFixed(2)} />
        </RPipeline>
      </RAudioContext>
    );
  }
}
