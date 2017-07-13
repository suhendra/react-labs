import React, { Component } from 'react';

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleButton: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleButton: !prevState.isToggleButton
    }))
  }

  render() {
    return (
      <button onClick={ this.handleClick }>{ this.state.isToggleButton ? 'ON' : 'OFF' }</button>
    );
  }
}
