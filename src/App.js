import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarBasic from './AppBarBasic';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBarBasic />
      </MuiThemeProvider>
    );
  }
}

export default App;
