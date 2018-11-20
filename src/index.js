import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeComponent from './MainComponents/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';


ReactDOM.render(<BrowserRouter><HomeComponent /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
