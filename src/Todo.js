import React, { Component } from 'react';
import ListItems from './ListItems';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ text: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <ListItems items={this.state.items} />
        <form onSubmit={ this.handleSubmit } >
          <input onChange={ this.handleChange } value={ this.state.text } />
          <button> { 'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}




