import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import  logo from '../media/logo.png'
import MtSvgLines from 'react-mt-svg-lines'; 
import { HashLink as NavLink } from 'react-router-hash-link';


import './index.css';
// import Vivus from "vivus";

	 
export default class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected:'DEFAULT',
			options: {
				'CREATIVE PRODUCER': [
					'DeSign',
					'DeV',
					'ConSult'
				],
				'PHOTOGRAFIE': [
					'Kreativ Portrait',
					'Hochzeit',
					'Immobilien',
					'Events'
				],
				'VIDEOGRAFIE': [
					'',
					''
				],
				'SQZM': [
					'Team',
					'Wieso?'
				],
				'BLOG': [
					'',
					''
				],
				'DEFAULT': [
					'',
					''
				],
			},
			links:{
				'DeSign': '#design',
				'DeV':'',
				'ConSult':'',
				'Kreativ Portrait':'',
				'Hochzeit':'wedding',
				'Immobilien':'',
				'Events':'',
				'Team':'Main-About',
				'Wieso?':'Main-About'
			}
		};



	}
	componentDidMount(){
        // new Vivus('facebook-logo', {duration: 200}, ()=>{console.log("error")});
        // new Vivus('instagram-logo', {duration: 200}, ()=>{console.log("error")});
    } 
	toggleNavOverlay(){
	  if(document.getElementsByClassName('nav-overlay')[0].style.display === 'block'){
		document.getElementsByClassName('nav-overlay')[0].style.display = 'none';
	  }else{
		document.getElementsByClassName('nav-overlay')[0].style.display = 'block';
	  }
	}
	render() {
		let colorScheme = this.props.wedding ? ('#d2d534') : ('green')
		return (
			<div id="Main-NavigationBar-component"  className={this.props.wedding ? ('wedding'): ('main')}>
					<Link className="logo" to="/" >
							<MtSvgLines animate={ true } duration={ 5000 }>
								<svg width="160px" height="45px" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
									<rect fill="none" id="canvas_background" height="252" width="802" y="-1" x="-1"/>
									<path stroke="black" strokeWidth="3.5" fill="none"  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
									<path stroke="none" strokeWidth="3.5" fill={colorScheme}  d="m104.6,225.7c-52.5,0 -95.3,-42.7 -95.3,-95.3c0,-52.5 42.7,-95.3 95.3,-95.3c52.5,0 95.3,42.7 95.3,95.3c0,52.5 -42.7,95.3 -95.3,95.3zm0,-180.6c-47,0 -85.3,38.2 -85.3,85.3s38.2,85.3 85.3,85.3s85.3,-38.2 85.3,-85.3s-38.2,-85.3 -85.3,-85.3z" />
									<path stroke="black" strokeWidth="5.5" fill="none" d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
									<path stroke="none" strokeWidth="5.5" fill={colorScheme} d="m153.3,174.1c-2.7,3.9 -11.6,12.9 -16.2,15.4c-3.6,1.9 -9.1,3.9 -13.8,3.9l-38.7,0c-13.1,0 -22.4,-10.3 -28.2,-17.8c-1.8,-2.4 -2.2,-3.4 -4,-6.6l22,-7.1c0,0 4.4,6 9.8,9.9c0,0 0.4,0.2 1.6,0.2l36.4,0c0.9,0 1.3,-0.2 1.3,-0.2c3.3,-1.7 10,-8.1 10,-9.9l0,-12.6c0,-1.9 -1.6,-3.4 -2.7,-3.6l-57.8,-15.9c-11.3,-3 -17.3,-13.5 -17.3,-23.4l0,-11.6c0,-3.6 0.7,-8.4 3.3,-12.2c2.7,-3.9 11.8,-12.9 16.4,-15.4c3.6,-1.9 8.9,-3.9 13.8,-3.9l32.9,0c13.3,0 22.4,10.5 28.2,17.8c1.8,2.4 2.9,4.3 4.4,7.5l-22.4,6.2c0,0 -5.1,-7.1 -9.8,-9.9c0,0 -0.2,-0.2 -1.3,-0.2l-31.2,0c-0.9,0 -1.3,0.2 -1.3,0.2c-3.6,1.7 -9.6,7.7 -9.6,9.4l0,10.7c0,1.9 1.3,3.4 2.4,3.6l58,16.3c11.3,3 17.3,13.7 17.3,23.4l0,13.5c0.1,3.7 -0.6,8.4 -3.5,12.3z" />
									<rect stroke={colorScheme} strokeWidth="5.5" fill="none" height="40.5" width="12" transform="matrix(0.265,0.9642,-0.9642,0.265,297.2811,-173.4374) " y="184.288389" x="202.970812"  />
									<circle stroke={colorScheme} strokeWidth="5.5" fill="none"  r="16.4" cy="200.7" cx="200.3" />
									<rect stroke={colorScheme} strokeWidth="5.5" fill="none" height="40.5" width="12" transform="matrix(0.3037,0.9528,-0.9528,0.3037,303.1784,-12.7289) " y="274.847613" x="97.034824" />
									<text x="-57.073813" y="-750.918384" id="svg_8" fontSize="178.1876" fontFamily="'BlenderPro-Bold'" fill="#262628" transform="matrix(1,0.00143,-0.00143,1,277.9696,931.6473) ">UEEZE</text>
									<line  strokeMiterlimit="10" strokeWidth="7" stroke="#262628" fill="none" y2="201" x2="682" y1="202" x1="249"/>
								</svg>
							</MtSvgLines>
					</Link>
				
				<div id="Main-NavigationBar">
					
					
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
							<div  className={this.props.wedding ? ('wedding  nav-list-item-dot'): ('main  nav-list-item-dot')}/>
							</div>
							<div className="nav-list-item">:</div>
							<div  className="nav-list-item" 
							onMouseOver={(e)=>{
								if(e.target.classList.contains('nav-list-item-dot-selected')){
									return;
								}
								this.setState({selected: 'PHOTOGRAFIE'})
								let list = document.getElementsByClassName('nav-list-item-dot-selected');
								for (var i = 0; i < list.length; i++) {
									// console.log(list[i].id); //second console output
									list[i].classList.remove('nav-list-item-dot-selected')
								}
								if(e.target.children[0])
								e.target.children[0].classList.add('nav-list-item-dot-selected');
							}} 
							
							onClick={()=>{
								this.setState({selected: 'PHOTOGRAFIE'})
							}} 
							>PHOTOGRAFIE
							<div  className={this.props.wedding ? ('wedding  nav-list-item-dot'): ('main  nav-list-item-dot')}/>
							</div>
							<div className="nav-list-item">:</div>
							<div className="nav-list-item"
							onMouseOver={(e)=>{
								if(e.target.classList.contains('nav-list-item-dot-selected')){
									return;
								}
								this.setState({selected: 'VIDEOGRAFIE'});
								let list = document.getElementsByClassName('nav-list-item-dot-selected');
								for (var i = 0; i < list.length; i++) {
									// console.log(list[i].id); //second console output
									list[i].classList.remove('nav-list-item-dot-selected')
								}
								if(e.target.children[0])
								e.target.children[0].classList.add('nav-list-item-dot-selected');
							}} 
							
							onClick={()=>{
								this.setState({selected: 'VIDEOGRAFIE'})
							}}
							>VIDEOGRAFIE
							<div  className={this.props.wedding ? ('wedding  nav-list-item-dot'): ('main  nav-list-item-dot')}/>
							</div>
							<div className="nav-list-item">:</div>
							<div className="nav-list-item"
							onMouseOver={(e)=>{
								if(e.target.classList.contains('nav-list-item-dot-selected')){
									return;
								}
								this.setState({selected: 'SQZM'});
								let list = document.getElementsByClassName('nav-list-item-dot-selected');
								for (var i = 0; i < list.length; i++) {
									// console.log(list[i].id); //second console output
									list[i].classList.remove('nav-list-item-dot-selected')
								}
								if(e.target.children[0])
								e.target.children[0].classList.add('nav-list-item-dot-selected');
							}} 
							
							onClick={()=>{
								this.setState({selected: 'SQZM'})
							}}
							>SQZM
							<div  className={this.props.wedding ? ('wedding  nav-list-item-dot'): ('main  nav-list-item-dot')}/>
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
							<div  className={this.props.wedding ? ('wedding  nav-list-item-dot'): ('main  nav-list-item-dot')}/>
							</div>
							<a className="social-share-button" href="https://www.instagram.com/squeezemotions/">
								<MtSvgLines animate={ true } duration={ 5000 }>
									<svg width="24" height="24" viewBox="0 0 24 24">
										<path stroke={colorScheme} strokeWidth="1.5" fill="none" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
								</MtSvgLines>
							</a>
							<a className="social-share-button"  href="https://www.facebook.com/squeezemotions/">
								<MtSvgLines animate={ true } duration={ 2000 }>
									<svg width="24" height="24" viewBox="0 0 24 24">
										<path stroke={colorScheme} strokeWidth="2" fill="none" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
									</svg>
								</MtSvgLines>
							</a>
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
					
					{/* <div className="social-buttons">
						<a href="https://www.instagram.com/squeezemotions/">
							<MtSvgLines animate={ true } duration={ 5000 }>
								<svg width="24" height="24" viewBox="0 0 24 24">
									<path stroke={colorScheme} strokeWidth="1.5" fill="none" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</MtSvgLines>
						</a>
						<a href="https://www.facebook.com/squeezemotions/">
							<MtSvgLines animate={ true } duration={ 2000 }>
								<svg width="24" height="24" viewBox="0 0 24 24">
									<path stroke={colorScheme} strokeWidth="2" fill="none" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
								</svg>
							</MtSvgLines>
						</a>
					</div> */}

				</div>
			</div>

		);
	}
}




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
					{/* <div className="nav-list-row selection-list-row">
							{Object.keys(this.state.options[this.state.selected]).map((e)=>{

								return <div key={"link"+e} onClick={()=>{
									let siteSection = document.getElementById(this.state.options[this.state.selected][e].length > 1 ? (this.state.links[this.state.options[this.state.selected][e]]):('#'));
									if(siteSection) siteSection.scrollIntoView()
										
								}}><Link to={(this.state.options[this.state.selected][e].length > 1 && this.state.links[this.state.options[this.state.selected][e]]=== 'wedding' )? (this.state.links[this.state.options[this.state.selected][e]]):('#')} className="nav-list-item" key={e}>{this.state.options[this.state.selected][e]}</Link></div>
								// return <NavLink key={e} smooth to="#team">Link to Hash Fragment</NavLink>
							})}
						</div> */}