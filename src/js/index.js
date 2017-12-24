import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Style from '../css/main.css';
import App from './components/App';
import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
