import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory()

ReactDOM.render(<BrowserRouter><App history={history} /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
