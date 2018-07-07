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
				width : '120px',
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
				width : '120px',
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
						<h2>KONTAKT</h2>
					</div>
					<ContactForm />
				</div>	
			// {/* </Draggable> */}
			
		);
	}
}


