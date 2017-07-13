import React, { Component } from 'react';
import Remarkable from 'remarkable';

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { value: ''   };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }

  getMD(){
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div>
        <h1>Markdown Editor</h1>
        <h2>Input</h2>
        <textarea
         onChange={ this.handleChange }
         defaultValue={ this.state.value }
         cols="30" rows="10"
        />
        <h2>Output</h2>
        <div
          dangerouslySetInnerHTML={this.getMD()}
        />

      </div>
    );
  }
}
