import React, { Component } from 'react';

class InputSuhu extends Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.onChangeInput(e.target.value)
  }

  render(){
    return (
      <fieldset>
        <legend>Silahkan masukkan suhu dalam {namaScala[this.props.scale]}</legend>
        <input value={this.props.value} onChange={this.handleChange} />
      </fieldset>
      )
  }
}

const namaScala = {
  c: 'Celcius',
  f: 'Fahrenheit'
}

export default class Suhu extends Component {
  constructor(props) {
    super(props);

    this.state = { celcius: '', fahrenheit: '' };

    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleFahrenheitChange(fahrenheit){
    this.setState({
      fahrenheit: fahrenheit
    });
    console.log('fahrenheit berubah')
  }

  handleCelciusChange(celcius){
    this.setState({
      celcius: celcius
    });
    console.log('celcius berubah')
  }

  render() {
    return (
      <div>
        <InputSuhu scale="c" value={this.state.celcius} onChangeInput={this.handleCelciusChange} />
        <InputSuhu scale="f" value={this.state.fahrenheit} onChangeInput={this.handleFahrenheitChange} />
      </div>
    );
  }
}
