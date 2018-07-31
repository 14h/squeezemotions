import React, { Component } from 'react';
// import Draggable, {DraggableCore} from 'react-draggable'; 

import './index.css';
import ContactForm from '../ContactForm';

export default class Kontakt extends Component {
	constructor(props) {
		super(props);
		this.state = {
			KontaktIsOpen: false,
			KontaktStyle : {
				position : 'fixed',
				top : '98vh',
				left : '0px',
				width : '100vw',
				transition:'all 0.3s linear',
				background: 'rgba(255, 255, 255, 1)',
				borderTop: '0.5vh solid #3b9950',
				height: '100vh'
			},
			FooterStyle : {
				height : '2vh',
				position : 'relative',
				bottom : '3.1%',
				left : '20px',
				width : '150px',
				background: 'rgba(255, 255, 255, 1)',
				
			}
		};
		this.openKontaktStyle = this.openKontaktStyle.bind(this);
		this.closeKontaktStyle = this.closeKontaktStyle.bind(this);
		this.switchOpenCloseKontakt = this.switchOpenCloseKontakt.bind(this);
	}

	openKontaktStyle(offset){
		offset = offset+'px';
		
		this.setState({
			KontaktIsOpen: true,
			KontaktStyle : {
				position : 'fixed',
				width : '100vw',
				top : offset,
				bottom : '0px',
				left : '0px',
				transition:'all 0.3s linear',
				background: '#FFF',
				height: '100vh'
			},
			FooterStyle : {
				height : '5vh',
				position : 'relative',
				top : '0px',
				bottom :'95vh',
				left : '0px',
				width : '100vw',
				background : '#FFF',
				transition:'all 0.3s linear',
				
			}
		})
	}
	closeKontaktStyle(offset){
		
		this.setState({
			KontaktIsOpen: false,
			KontaktStyle : {
				position : 'fixed',
				top : '98vh',
				left : '0px',
				width : '100vw',
				transition:'all 0.3s linear',
				background: 'rgba(255, 255, 255, 1)',
				// background-color: rgba(255, 255, 255, 0.7);
				borderTop: '0.5vh solid #53917c',
				height: '100vh'
			},
			FooterStyle : {
				height : '2vh',
				position : 'relative',
				bottom : '3.1%',
				left : '20px',
				width : '150px',
				background: 'rgba(255, 255, 255, 1)',
				
			}
		})
	}
	switchOpenCloseKontakt(offset){
		if(this.state.KontaktIsOpen){
			this.closeKontaktStyle(offset);
		}else{
			this.openKontaktStyle(offset);
		}
	}
	handleStop(event){
		console.log(event)
		let Kontakt = document.getElementById('Kontakt');
		console.log(Kontakt.getBoundingClientRect() )
		// Kontakt.getBoundingClientRect().top
		// Kontakt.getBoundingClientRect().height
		// this.switchOpenCloseKontakt(Kontakt.getBoundingClientRect().height - Kontakt.getBoundingClientRect().top)
	}

	render() {
		return (
			// window.visualViewport.height*0.825 grid={[0, window.visualViewport.height*0.825]}
			// <Draggable axis="y" onStop={(event)=>this.handleStop(event)} bounds= {{ top: -window.visualViewport.height*0.825,bottom: 0}} >
				<div id="Kontakt" style={this.state.KontaktStyle}>	
					<div className="Footer" style={this.state.FooterStyle} onClick={()=>this.switchOpenCloseKontakt(0)}>
						<svg  width="30px" height="30px" viewBox="0 0 210 210"   xmlns="http://www.w3.org/2000/svg">

							<g>
								<title>background</title>
								<rect fill="none" id="canvas_background" height="212" width="212" y="-1" x="-1"/>
							</g>
							<g>
								<title>Layer 1</title>
								<path id="svg_7" d="m103.6,4.7c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#BFA568"/>
								<polygon transform="rotate(98.42761993408203 179.35000610351562,171.29998779296875) " id="svg_11" points="172.39999389648438,154.79998779296875 192.89999389648438,165.5 197.89999389648438,176 168.3000030517578,187.79998779296875 160.8000030517578,156.5 " strokeMiterlimit="10" strokeWidth="10" stroke="#BFA568" fill="none"/>
							</g>
						</svg>
						<h2>KONTAKT</h2>
					</div>
					<ContactForm />
				</div>	
			// {/* </Draggable> */}
			
		);
	}
}


