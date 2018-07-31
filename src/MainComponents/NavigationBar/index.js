import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import  logo from '../media/logo.png'

import './index.css';

export default class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected:'DEFAULT',
		options: {
			'CREATIVE PRODUCER': [
				'option1',
				'option2',
				'option3',
				'option4'
			],
			'PHOTOGRAPHIE': [
				'Hochzeiten',
				'Veranstaltungen',
				'Portrait',
				'Immobilien'
			],
			'VIDEO': [
				'option9',
				'option2',
				'option3',
				'option4'
			],
			'TEAM': [
				'option6',
				'option2',
				'option4',
				'option6'
			],
			'BLOG': [
				'option2',
				'option1',
				'option5',
				'option1'
			],
			'DEFAULT': [
				'',
				''
			],
		}
		};



	  }
	
	toggleNavOverlay(){
	  if(document.getElementsByClassName('nav-overlay')[0].style.display === 'block'){
		document.getElementsByClassName('nav-overlay')[0].style.display = 'none';
	  }else{
		document.getElementsByClassName('nav-overlay')[0].style.display = 'block';
	  }
	}
	render() {
		return (

			<div id="Main-NavigationBar">
				<Link className="logo" to="/">
						{/* <img src={logo} alt="SqueezeMotions" width="45px"/> */}
						{/* <svg width="121px" height="60px" viewBox="0 0 810 400"  xmlns="http://www.w3.org/2000/svg">

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
						</svg> */}
						<svg width="160px" height="50px" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">

							<g>
							<title>background</title>
							<rect fill="none" id="canvas_background" height="252" width="802" y="-1" x="-1"/>
							</g>
							<g>
							<title>Layer 1</title>
							<g id="svg_1">
							<path id="svg_2" d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z"  fill="#045b10"/>
							<path id="svg_3" d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" fill="#045b10"/>
							<rect id="svg_4" height="40.5" width="12" transform="matrix(0.265,0.9642,-0.9642,0.265,297.2811,-173.4374) " y="184.288389" x="202.970812"  fill="#045b10"/>
							<circle id="svg_5" r="16.4" cy="200.7" cx="200.3" fill="#045b10"/>
							<rect id="svg_6" height="40.5" width="12" transform="matrix(0.3037,0.9528,-0.9528,0.3037,303.1784,-12.7289) " y="274.847613" x="97.034824" fill="#045b10"/>
							</g>
							<text x="-57.073813" y="-750.918384" id="svg_8" fontSize="178.1876" fontFamily="'BlenderPro-Bold'" fill="#262628" transform="matrix(1,0.00143,-0.00143,1,277.9696,931.6473) ">UEEZE</text>
							<line id="svg_9" y2="201" x2="682" y1="202" x1="249" strokeMiterlimit="10" strokeWidth="7" stroke="#262628" fill="none"/>
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
						<div  className="nav-list-item" 
						onMouseOver={(e)=>{
							if(e.target.classList.contains('nav-list-item-dot-selected')){
								return;
							}
							this.setState({selected: 'CREATIVE PRODUCER'});
							let list = document.getElementsByClassName('nav-list-item-dot-selected');
							for (var i = 0; i < list.length; i++) {
								// console.log(list[i].id); //second console output
								list[i].classList.remove('nav-list-item-dot-selected')
							}

							if(e.target.children[0] )
							e.target.children[0].classList.add('nav-list-item-dot-selected');
						}} 
						
						onClick={()=>{
							this.setState({selected: 'CREATIVE PRODUCER'})
						}}
						>CREATIVE PRODUCER
						<div  className="nav-list-item-dot"/>
						</div>
						<div className="nav-list-item">:</div>
						<div  className="nav-list-item" 
						onMouseOver={(e)=>{
							if(e.target.classList.contains('nav-list-item-dot-selected')){
								return;
							}
							this.setState({selected: 'PHOTOGRAPHIE'})
							let list = document.getElementsByClassName('nav-list-item-dot-selected');
							for (var i = 0; i < list.length; i++) {
								// console.log(list[i].id); //second console output
								list[i].classList.remove('nav-list-item-dot-selected')
							}
							if(e.target.children[0])
							e.target.children[0].classList.add('nav-list-item-dot-selected');
						}} 
						
						onClick={()=>{
							this.setState({selected: 'PHOTOGRAPHIE'})
						}} 
						>PHOTOGRAPHIE
						<div  className="nav-list-item-dot"/>
						</div>
						<div className="nav-list-item">:</div>
						<div className="nav-list-item"
						onMouseOver={(e)=>{
							if(e.target.classList.contains('nav-list-item-dot-selected')){
								return;
							}
							this.setState({selected: 'VIDEO'});
							let list = document.getElementsByClassName('nav-list-item-dot-selected');
							for (var i = 0; i < list.length; i++) {
								// console.log(list[i].id); //second console output
								list[i].classList.remove('nav-list-item-dot-selected')
							}
							if(e.target.children[0])
							e.target.children[0].classList.add('nav-list-item-dot-selected');
						}} 
						
						onClick={()=>{
							this.setState({selected: 'VIDEO'})
						}}
						>VIDEO
						<div  className="nav-list-item-dot"/>
						</div>
						<div className="nav-list-item">:</div>
						<div className="nav-list-item"
						onMouseOver={(e)=>{
							if(e.target.classList.contains('nav-list-item-dot-selected')){
								return;
							}
							this.setState({selected: 'TEAM'});
							let list = document.getElementsByClassName('nav-list-item-dot-selected');
							for (var i = 0; i < list.length; i++) {
								// console.log(list[i].id); //second console output
								list[i].classList.remove('nav-list-item-dot-selected')
							}
							if(e.target.children[0])
							e.target.children[0].classList.add('nav-list-item-dot-selected');
						}} 
						
						onClick={()=>{
							this.setState({selected: 'TEAM'})
						}}
						>TEAM
						<div  className="nav-list-item-dot"/>
						</div>
						<div className="nav-list-item">:</div>
						<div className="nav-list-item"
						onMouseOver={(e)=>{
							if(e.target.classList.contains('nav-list-item-dot-selected')){
								return;
							}
							this.setState({selected: 'BLOG'});
							let list = document.getElementsByClassName('nav-list-item-dot-selected');
							for (var i = 0; i < list.length; i++) {
								// console.log(list[i].id); //second console output
								list[i].classList.remove('nav-list-item-dot-selected')
							}
							let list2 = document.getElementsByClassName('nav-list-item');
							for (i = 0; i < list2.length; i++) {
								// console.log(list[i].id); //second console output
								list2[i].classList.remove('selected')
							}
							e.target.classList.add('selected')
							if(e.target.children[0])
							e.target.children[0].classList.add('nav-list-item-dot-selected');
						}} 
						
						onClick={()=>{
							this.setState({selected: 'BLOG'})
						}}
						>BLOG
						<div  className="nav-list-item-dot"/>
						</div>
					</div>
					<div className="nav-list-row">
						{Object.keys(this.state.options[this.state.selected]).map((e)=>{

							return <Link to="/wedding" className="nav-list-item" key={e}>{this.state.options[this.state.selected][e]}</Link>
						})}
						{/* <Link to="/wedding" className="nav-list-item">Hochzeiten</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">Veranstaltungen</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">Portrait</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">Immobilien</Link> */}
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


