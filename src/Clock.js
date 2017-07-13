import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>{ this.state.date.toLocaleTimeString() }</h1>
      </div>
    );
  }
}
