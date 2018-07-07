import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import  logo from '../media/logo.svg'

import './index.css';

export default class Logo extends Component {
	
	render() {
		return (
			<div id="Logo">
				<img  src={logo} alt="Squeeze Motions" />
			</div>
		);
	}
}


