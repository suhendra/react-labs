import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Master from './components/Master';
import Home from './components/pages/Home';

injectTapEventPlugin();

ReactDOM.render(<Master />, document.getElementById('root'));
registerServiceWorker();
