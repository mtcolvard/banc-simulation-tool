import React from 'react';
import { render } from 'react-dom';
import examples from './examples.js';
import TalkingCrowdedRestaurant from './Talking-Crowded-Restaurant.js'

// const example = location.hash.slice(1);
// onExampleChange(e) {
//   location.hash = e.target.value;
//   location.reload();
// }
// this.onExampleChange = this.onExampleChange.bind(this)



class TLsim extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 'Silence',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <main>
        <header>
        <article>
          <h1><strong>Noise Transmission Reduction Simulator</strong></h1>
          <h2>Lee Brenner, Bay Area Noise Control</h2>
        </article>
        <label htmlFor="example-select">Select your scenario: </label>
          <select id="example-select" onChange={this.handleChange} value={this.state.example}>
          <option value="Talking-Crowded-Restaurant" disabled>Choose an example</option>
            {
              Object.keys(examples).map((ex, ei) => <option key={ei} value={ex}>{ex}</option>)
            }
          </select>
        </header>
        <hr/>
        <span></span>
        { examples[this.value] || null }
      </main>
    )
  }
}
export default TLsim
