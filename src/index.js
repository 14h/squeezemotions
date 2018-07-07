import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SqueezeMotions from './SqueezeMotions';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';


ReactDOM.render(<BrowserRouter><SqueezeMotions /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
