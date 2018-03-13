import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import v1 from './v1';
import v2 from './v2';
import Versioner from './Versioner';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';



const history = createBrowserHistory()
ReactDOM.render(<Router history={history}>
<div><Route path="/1" component={v1} />
<Route path="/2" component={v2} /></div>
</Router>, document.getElementById('root'));
registerServiceWorker();
