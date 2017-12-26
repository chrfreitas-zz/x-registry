import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Style from '../css/main.css';
import AppComponent from './components/app.component'
import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>, document.getElementById('root'));
