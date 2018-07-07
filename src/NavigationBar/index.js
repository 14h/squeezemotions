import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  logo from '../media/logo.png'

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
			<div>
			<div id="NavigationBar">
				<Link className="logo" to="/">
						<img src={logo} alt="SqueezeMotions" width="45px"/>
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
						<Link to="/" className="nav-list-item">HOME</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">PHOTOGRAPHIE</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">VIDEO</Link>
						<div className="nav-list-item">:</div>
						<Link to="/" className="nav-list-item">TEAM</Link>
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
				
				
			</div>
			<div className="border"></div>
			</div>
		);
	}
}


