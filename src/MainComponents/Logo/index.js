import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Plx from 'react-plx';
import './index.css';

const jaParallaxData = [
	{
	  start: 0,
	  end: 200,
	  properties: [

		{
		  startValue: 0,
		  endValue: 0.05,
		  property: "opacity"
		}
	  ]
	},
	{
	  start: 200,
	  end: 300,
	  properties: [

		{
		  startValue: 0.05,
		  endValue: 0.25,
		  property: "opacity"
		}
	  ]
	},
	{
	  start: 350,
	  duration: 300,
	  properties: [
		{
		  startValue: 0.25,
		  endValue: 0.35,
		  property: "opacity"
		}
	  ]
	},
];
const logoParallaxData = [
	{
	  start: 0,
	  end: 300,
	  properties: [

		{
		  startValue: 1,
		  endValue: 0.25,
		  property: "opacity"
		}
	  ]
	},
	{
	  start: 350,
	  duration: 300,
	  properties: [
		{
		  startValue: 0.25,
		  endValue: 0,
		  property: "opacity"
		}
	  ]
	},
];

// #BFA568

export default class Logo extends Component {
	render() {
		return (
			<div className={this.props.wedding? ("Main-Logo Wedding-Logo" ):("Main-Logo" )}>
			
			<Plx
				className='ja-message'
				parallaxData={ jaParallaxData } // your parallax effects, see beneath
			>
				<div className="">JA!</div>
			</Plx>
			
			<div className={this.props.wedding? ("shorties wedding"):("shorties")}>
				
					<Link to="creativeproduction" className=" shorties-link shorties-first">
						<div className="shorties-top">
							Creative Production
						</div>
					</Link>
					<Link to="videografie"  className=" shorties-link shorties-second">
						<div className="shorties-top">
						Bewegte Bilder
						</div>
					</Link>
			</div>
			<Plx
				className='MyAwesomeParallax'
				parallaxData={ logoParallaxData } // your parallax effects, see beneath
			>
				{!this.props.wedding && <svg className="main-svg"  viewBox="0 0 210 210"   xmlns="http://www.w3.org/2000/svg">
							<rect fill="none" id="canvas_background" height="212" width="212" y="-1" x="-1"/>
							<path id="svg_7" d="m103.6,4.7c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#045b10"/>
							<circle  strokeWidth="5.5" fill="#045b10"  stroke="none" r="16.4" cy="185.7" cx="185.3" />
					</svg>
					}
					{this.props.wedding && <svg className="main-svg" viewBox="0 0 210 210"   xmlns="http://www.w3.org/2000/svg">
						<path id="svg_7" d="m103.6,4.7c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#FFF"/>

						<polygon transform="rotate(98.42761993408203 179.35000610351562,171.29998779296875) " id="svg_11" points="172.39999389648438,154.79998779296875 192.89999389648438,165.5 197.89999389648438,176 168.3000030517578,187.79998779296875 160.8000030517578,156.5 " strokeMiterlimit="10" strokeWidth="10" stroke="#FFF" fill="none"/>
				</svg>}
			</Plx>

			<div className={this.props.wedding? ("shorties wedding"):("shorties")}>
					<Link to="wedding"  className=" shorties-link shorties-third">
						<div className="shorties-top">
							Deine Idee
						</div>
					</Link>
					<Link to="photografie"  className=" shorties-link shorties-fourth">
						<div className="shorties-top">
						Fotografie
						</div>
					</Link>
			</div>
			<i className="fa fa-angle-down scroll-indicator"></i>
		</div>
		);
	}
}


