import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import  logo from '../media/logo.png'

import './index.css';

export default class NavigationBar extends Component {
	toggleNavOverlay(){
	  if(document.getElementsByClassName('nav-overlay')[0].style.display === 'block'){
		document.getElementsByClassName('nav-overlay')[0].style.display = 'none';
	  }else{
		document.getElementsByClassName('nav-overlay')[0].style.display = 'block';
	  }
	}
	render() {
		return (

			<div id="NavigationBar">
				<Link className="logo" to="/">
						{/* <img src={logo} alt="SqueezeMotions" width="45px"/> */}
						<svg width="121px" height="60px" viewBox="0 0 810 400"  xmlns="http://www.w3.org/2000/svg">

							<g>
							<title>background</title>
							<rect fill="none" id="canvas_background" height="402" width="812" y="-1" x="-1"/>
							</g>
							<g>
							<title>Layer 1</title>
							<path id="svg_7" d="m124.846206,45.052968c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#BFA568"/>
							<text x="-51.809953" y="-738.572944" id="svg_8" fontSize="178.1876" fontFamily="'BlenderPro-Bold'" fill="#262628" transform="matrix(1,0.00143,-0.00143,1,277.9696,931.6473) ">UEEZE</text>
							<line id="svg_9" y2="210.352968" x2="672.246206" y1="211.352968" x1="239.246206" strokeMiterlimit="10" strokeWidth="7" stroke="#262628" fill="none"/>
							<text x="-50.753794" y="-738.647032" id="svg_10" fontSize="50.3962" fontFamily="'Zapfino'" fill="#BFA568" transform="matrix(1,0,0,1,488.4576,1049.7368) ">Wedding</text>
							<polygon id="svg_11" points="168.6461944580078,26.152956008911133 189.1461944580078,36.85296630859375 194.1461944580078,47.35296630859375 164.54620361328125,59.152957916259766 157.04620361328125,27.852968215942383 " strokeMiterlimit="10" strokeWidth="10" stroke="#BFA568" fill="none"/>
							</g>
						</svg>
				</Link>
				<div className="location"></div>
				<div className="hamburger-menu">
					<div className='navigation-hamburger'>
						<input onChange={this.toggleNavOverlay} id="toggle" type="checkbox" />
						<label className="hamburger" htmlFor="toggle">
							<div className="top"></div>
							<div className="meat"></div>
							<div className="bottom"></div>
						</label>
					</div>  	
				</div>
				<div className="nav-list">
					<div className="nav-list-row">
						<a href="#sectionOne"  className="nav-list-item">CREATIVE PRODUCER</a>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">PHOTOGRAPHIE</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">VIDEO</Link>
						<div className="nav-list-item">:</div>
						<a href="#sectionThree" className="nav-list-item">TEAM</a>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">BLOG</Link>
					</div>
					<div className="nav-list-row">
						<Link to="/" className="nav-list-item">Hochzeiten</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">Veranstaltungen</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">Portrait</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">Immobilien</Link>
					</div>
				</div>
				<div className='nav-overlay' >
					<div className="nav2">
						<Link className="nav2-elem" onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to="/">HOME</Link>
						<Link className="nav2-elem"  onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to=""></Link>
						<Link className="nav2-elem"  onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to="gallery">KREATIVE PRODUCER</Link>
						<Link className="nav2-elem"  onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to="about">TEAM</Link>
						<Link className="nav2-elem"  onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to="blog">BLOG</Link>
						<Link className="nav2-elem"  onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to=""></Link>
						
						

					</div>
				</div>
				{/* <div className="social-media-links">
					<svg width="60px" height="60px" vviewBox="0 0 408.788 408.788"  xmlns="http://www.w3.org/2000/svg">

							<g>
							<title>background</title>
							<rect fill="none" id="canvas_background" height="402" width="812" y="-1" x="-1"/>
							</g>
							<g>
							<title>Layer 1</title>
							<path id="svg_8" d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"  fill="#475993"/>
							
							</g>
						</svg>
				</div>
				 */}
				
			</div>

		);
	}
}


