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
				height : '5vh',
				position : 'relative',
				bottom : '5.1%',
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
		let colorScheme = this.props.wedding ? ('#d2d534') : ('green')
		return (
			// window.visualViewport.height*0.825 grid={[0, window.visualViewport.height*0.825]}
			// <Draggable axis="y" onStop={(event)=>this.handleStop(event)} bounds= {{ top: -window.visualViewport.height*0.825,bottom: 0}} >
				<div id="Kontakt" style={this.state.KontaktStyle}>	
					<div className="Footer" style={this.state.FooterStyle} onClick={()=>this.switchOpenCloseKontakt(0)}>
						{/* <svg  width="30px" height="30px" viewBox="0 0 210 210"   xmlns="http://www.w3.org/2000/svg">

							<g>
								<title>background</title>
								<rect fill="none" id="canvas_background" height="212" width="212" y="-1" x="-1"/>
							</g>
							<g>
								<title>Layer 1</title>
								<path id="svg_7" d="m103.6,4.7c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#BFA568"/>
								<polygon transform="rotate(98.42761993408203 179.35000610351562,171.29998779296875) " id="svg_11" points="172.39999389648438,154.79998779296875 192.89999389648438,165.5 197.89999389648438,176 168.3000030517578,187.79998779296875 160.8000030517578,156.5 " strokeMiterlimit="10" strokeWidth="10" stroke="#BFA568" fill="none"/>
							</g>
						</svg> */}
						{/* <svg  width="40px" height="40px" viewBox="0 0 210 210"   xmlns="http://www.w3.org/2000/svg">
							<g>
								<title>background</title>
								<rect fill="none" id="canvas_background" height="212" width="212" y="-1" x="-1"/>
							</g>
							<g>
								<title>Layer 1</title>
								<path id="svg_7" d="m103.6,4.7c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#045b10"/>
								<polygon transform="rotate(98.42761993408203 179.35000610351562,171.29998779296875) " id="svg_11" points="172.39999389648438,154.79998779296875 192.89999389648438,165.5 197.89999389648438,176 168.3000030517578,187.79998779296875 160.8000030517578,156.5 " strokeMiterlimit="10" strokeWidth="10" stroke="#045b10" fill="none"/>
							</g>
						</svg> */}
						{/* <svg width="81px" height="45px" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
									<rect fill="none" id="canvas_background" height="252" width="802" y="-1" x="-1"/>
									<path stroke="black" strokeWidth="3.5" fill="none"  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
									<path stroke="none" strokeWidth="3.5" fill={colorScheme}  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
									<path stroke="black" strokeWidth="5.5" fill="none" d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
									<path stroke="none" strokeWidth="5.5" fill={colorScheme} d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
									<rect stroke={colorScheme} strokeWidth="5.5" fill="none" height="40.5" width="12" transform="matrix(0.265,0.9642,-0.9642,0.265,297.2811,-173.4374) " y="184.288389" x="202.970812"  />
									<circle stroke={colorScheme} strokeWidth="5.5" fill="none"  r="16.4" cy="200.7" cx="200.3" />
									<rect stroke={colorScheme} strokeWidth="5.5" fill="none" height="40.5" width="12" transform="matrix(0.3037,0.9528,-0.9528,0.3037,303.1784,-12.7289) " y="274.847613" x="97.034824" />
									<text x="-57.073813" y="-750.918384" id="svg_8" fontSize="178.1876" fontFamily="'BlenderPro-Bold'" fill="#262628" transform="matrix(1,0.00143,-0.00143,1,277.9696,931.6473) ">KONTAKT</text>
									<line  strokeMiterlimit="10" strokeWidth="7" stroke="#262628" fill="none" y2="201" x2="682" y1="202" x1="249"/>
								</svg> */}
								<svg width="225px" height="45px" viewBox="0 0 920 250" xmlns="http://www.w3.org/2000/svg">
									<rect fill="none" id="canvas_background" height="252" width="802" y="-1" x="-1"/>
									<path stroke="black" strokeWidth="3.5" fill="none"  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
									<path stroke="none" strokeWidth="3.5" fill={colorScheme}  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
									<path stroke="black" strokeWidth="5.5" fill="none" d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
									<path stroke="none" strokeWidth="5.5" fill={colorScheme} d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
									<rect stroke={colorScheme} strokeWidth="5.5" fill="none" height="40.5" width="12" transform="matrix(0.265,0.9642,-0.9642,0.265,297.2811,-173.4374) " y="184.288389" x="202.970812"  />
									<circle stroke={colorScheme} strokeWidth="5.5" fill="none"  r="16.4" cy="200.7" cx="200.3" />
									<rect stroke={colorScheme} strokeWidth="5.5" fill="none" height="40.5" width="12" transform="matrix(0.3037,0.9528,-0.9528,0.3037,303.1784,-12.7289) " y="274.847613" x="97.034824" />
									<text x="-57.073813" y="-750.918384" id="svg_8" fontSize="178.1876" fontFamily="'BlenderPro-Bold'" fill="#262628" transform="matrix(1,0.00143,-0.00143,1,277.9696,931.6473) ">KONTAKT</text>
									<line  strokeMiterlimit="10" strokeWidth="7" stroke="#262628" fill="none" y2="201" x2="682" y1="202" x1="249"/>
								</svg>
						{/* <h2>KONTAKT</h2> */}
					</div>
					<ContactForm />
				</div>	
			// {/* </Draggable> */}
			
		);
	}
}

