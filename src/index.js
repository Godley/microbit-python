import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import v1 from './v1';
import v1dot1 from './v1.1';
import v2 from './v2';
import Versioner from './Versioner';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const manifest = [
    [],
    [v1, v1dot1],
    [v2]
]
console.log(manifest[1][manifest[1].length - 1])
const history = createBrowserHistory()
ReactDOM.render(<Router history={history}>
<div><Route exact path="/1" component={manifest[1][manifest[1].length - 1]} />
<Route exact path="/2" component={manifest[2][manifest[2].length - 1]} />
<Route exact path="/" component={manifest[manifest.length - 1][manifest[manifest.length - 1].length - 1]} /></div>
</Router>, document.getElementById('root'));
registerServiceWorker();
