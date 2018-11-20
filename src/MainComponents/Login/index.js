import React, { Component } from 'react';
import './index.css';
import hash from 'string-hash';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		// this.openKontaktStyle = this.openKontaktStyle.bind(this);
	}
	render() {
		return (
				<div id="Login">
				{/* {console.log(hash("SqueezeMotions","4056024096"))}	 */}
				<input type="password" id="password" name="password" placeholder="SqueezeMotions" />
					{/* <button onClick={this.props.switchAdmin}> Switch Admin</button> */}
					<button onClick={()=>{
						if(hash(document.getElementById('password').value)===4056024096){
							this.props.switchAdmin();
						}
					}}> Switch Admin</button>
				</div>
		);
	}
}


