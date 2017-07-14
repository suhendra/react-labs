// Lifting up state

import React, { Component } from 'react';

function IndikatorMendidih(props){
  if(props.celcius >= 100){
    return (<h1>Mendidih</h1>);
  } else { return ( <h1>Belum Mendidih</h1>)}
}

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
}

class TemperaturInput extends Component {
  constructor(props) {
    super(props);

    this.state = { temperatur: '' };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.onTemperaturInputChange(e.target.value)
  }

  render() {
    const temperatur = this.props.temperatur
    const scale = this.props.scale
    return (
      <div>
        <fieldset>
          <legend>Enter Temperatur in {scaleNames[scale]}</legend>
          <input value={temperatur} onChange={this.handleChange}/>
        </fieldset>
      </div>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


export default class TemperaturCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = { temperatur: '' };

    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelciusChange(temperatur){
    this.setState({scale: 'c', temperatur})
  }

  handleFahrenheitChange(temperatur){
    this.setState({scale: 'f', temperatur})
  }

  render() {
    const scale = this.state.scale
    const temperatur = this.state.temperatur
    const celcius = scale === 'f' ? tryConvert(temperatur, toCelsius) : temperatur;
    const fahrenheit = scale === 'c' ? tryConvert(temperatur, toFahrenheit) : temperatur;
    return (
      <div>
        <TemperaturInput scale="f" temperatur={fahrenheit} onTemperaturInputChange={this.handleFahrenheitChange} />
        <TemperaturInput scale="c" temperatur={celcius} onTemperaturInputChange={this.handleCelciusChange} />
        <IndikatorMendidih celcius={parseFloat(celcius)} />
      </div>
    );
  }
}
