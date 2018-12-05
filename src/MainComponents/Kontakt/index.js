import React, { Component } from 'react';
import './index.css';
import ContactForm from '../ContactForm';

export default class Kontakt extends Component {
	constructor(props) {
		super(props);
		this.state = {
			KontaktIsOpen: false,
			KontaktStyle : {
				position : 'fixed',
				top : '99vh',
				left : '0px',
				width : '100vw',
				transition:'all 0.3s linear',
				background: 'rgba(255, 255, 255, 1)',
				borderTop: '0.5vh solid #3b9950',
				height: '100vh',
				zIndex: 20,
			},
			FooterStyle : {
				height : '3vh',
				position : 'relative',
				bottom : '4%',
				left : '20px',
				width : '150px',
				background: 'rgba(255, 255, 255, 1)',
				transition:'all 0.3s linear',
				zIndex: 20,
				paddingTop: '10px',
				
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
				height: '100vh',
				zIndex: 20,
			},
			FooterStyle : {
				height : '3vh',
				position : 'relative',
				bottom : '0%',
				left : '20px',
				width : '150px',
				background: 'rgba(255, 255, 255, 1)',
				transition:'all 0.3s linear',
				zIndex: 20,
				paddingTop: '10px',
				
				
			}
		})
	}
	closeKontaktStyle(offset){
		this.setState({
			KontaktIsOpen: false,
			KontaktStyle : {
				position : 'fixed',
				top : '99vh',
				left : '0px',
				width : '100vw',
				transition:'all 0.3s linear',
				background: 'rgba(255, 255, 255, 1)',
				borderTop: '0.5vh solid #3b9950',
				height: '100vh',
				zIndex: 20,
			},
			FooterStyle : {
				height : '3vh',
				position : 'relative',
				bottom : '4%',
				left : '20px',
				width : '150px',
				background: 'rgba(255, 255, 255, 1)',
				transition:'all 0.3s linear',
				zIndex: 20,
				paddingTop: '10px',
				
			}
		})
	}
	switchOpenCloseKontakt(offset){
		if(this.state.KontaktIsOpen){
		this.closeKontaktStyle(offset);
			if(document.body.clientWidth  > 1000)document.getElementById("FooterId").classList.add("closed");
		}else{
			this.openKontaktStyle(offset);
			document.getElementById("FooterId").classList.remove("closed");
		}
	}

	render() {
		let colorScheme = this.props.wedding ? ('#d2d534') : ('green')
		return (
				<div id="Kontakt" style={this.state.KontaktStyle}>	
					<div id="FooterId" className={(document.body.clientWidth  > 1000)?("Footer closed"):("Footer")} style={this.state.FooterStyle} onClick={()=>this.switchOpenCloseKontakt(0)}>
						<svg style={{transform: (document.body.clientWidth  > 1000)?('translate(0, -10px)'):('translate(-25px, -10px)')}} width="225px" height="45px" viewBox="0 0 920 250" xmlns="http://www.w3.org/2000/svg">
							<path fill={colorScheme} strokeWidth="3.5" stroke="none"  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
							<path fill={colorScheme} strokeWidth="5.5" stroke="none" d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
							<rect fill={colorScheme} strokeWidth="5.5" stroke="none" height="40.5" width="12" transform="matrix(0.265,0.9642,-0.9642,0.265,297.2811,-173.4374) " y="184.288389" x="202.970812"  />
							<circle fill={colorScheme} strokeWidth="5.5" stroke="none"  r="16.4" cy="200.7" cx="200.3" />
							<rect fill={colorScheme} strokeWidth="5.5" stroke="none" height="40.5" width="12" transform="matrix(0.3037,0.9528,-0.9528,0.3037,303.1784,-12.7289) " y="274.847613" x="97.034824" />
							<text x="-57.073813" y="-750.918384" id="svg_8" fontSize="138.1876" fontFamily="Lato" fill="#262628" transform="matrix(1,0.00143,-0.00143,1,277.9696,931.6473)  ">KONTAKT</text>
							<line  strokeMiterlimit="10" strokeWidth="7" stroke="#262628" fill="none" y2="201" x2="682" y1="202" x1="249"/>
						</svg>
					</div>
					<ContactForm />
				</div>	
			
		);
	}
}


