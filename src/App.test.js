import React from 'react';
import ReactDOM from 'react-dom';
import SqueezeMotions from './SqueezeMotions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SqueezeMotions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
