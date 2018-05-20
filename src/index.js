import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SqueezeMotions from './SqueezeMotions';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SqueezeMotions />, document.getElementById('root'));
registerServiceWorker();
