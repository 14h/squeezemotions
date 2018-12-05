import React, { Component } from 'react';
// import BallroomGallery from '../BallroomGallery';
import Vivus from "vivus";
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

import './index.css';


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

// function slideRenderer(params) {
//     const { index, key } = params;
//     if(photos[index%photos.length])
//     return (
//       <img src={photos[index%photos.length].src} key={key} alt="sasad"/> 
//     );
//     return (
//         <div key={key}/> 
//       );
// }

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
  
]
const images= [
	[
		'https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/706140/pexels-photo-706140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/276690/pexels-photo-276690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/265097/pexels-photo-265097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	],
	[
		'https://images.pexels.com/photos/1125329/pexels-photo-1125329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/627716/pexels-photo-627716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/303349/pexels-photo-303349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'	
	],
	[
		'https://images.pexels.com/photos/64687/pexels-photo-64687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/35624/auto-car-cadillac-oldtimer.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/40658/classic-car-automobile-car-retro-40658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	],
	[
		'https://images.pexels.com/photos/192499/pexels-photo-192499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/175690/pexels-photo-175690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/69930/bugatti-1932-car-automobile-69930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	],
	[
		'https://images.pexels.com/photos/1222469/pexels-photo-1222469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/432632/pexels-photo-432632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1068638/pexels-photo-1068638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	]
]

// import './index.css';
// import jeels from '../media/01.jpg';
// import Larissa from '../media/01.png';
export default class Ballroom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first: "#FFF",
			second: "#b9a767",
			third: "#b9a767",
			fourth: "#b9a767",
			fifth: "#b9a767",
			selected: 1,
			imageViewSelected: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
			indexBallroom:0,
		};
		this.slideRenderer = this.slideRenderer.bind(this)
	}
	slideRenderer(params) {
		const { index, key } = params;
		if(images[this.state.selected-1][index%images[this.state.selected-1].length])
		return (
		  <img src={images[this.state.selected-1][index%images[this.state.selected-1].length]} key={key} alt="sasad"/> 
		);
		return (
			<div key={key}/> 
		  );
	}
	
	handleChangeIndex = indexBallroom => {
		if(indexBallroom<0){
		  indexBallroom = photos.length + indexBallroom;
		}
		this.setState({
		  indexBallroom,
		});

	};
	changeImageViewSelected(newImageViewSelected){
		this.setState({imageViewSelected: newImageViewSelected});
	}
	componentDidMount(){
        let svnOption1 = new Vivus('svg-option1',{
			type: 'delayed',
			duration: 200,
			animTimingFunction: Vivus.EASE
		}, ()=>{console.log("error")});
		svnOption1.play(1, function() {
			// called after the animation completes
		  })
        new Vivus('svg-option2', {duration: 200}, ()=>{console.log("error")});
        new Vivus('svg-option3', {duration: 200}, ()=>{console.log("error")});
        new Vivus('svg-option4', {duration: 200}, ()=>{console.log("error")});
        new Vivus('svg-option5', {duration: 200}, ()=>{console.log("error")});
    }  
	render() {
		return (
			<div>
				<div id="Ballroom">
					{/* <div className="ballroom-message">
						Kreativität und die Liebe zum Detail in jeder Aufnahme sind es, die die wichtigsten Momente deines Lebens unvergesslich machen.
					</div> */}
					<div className="ballroom-header">
						Ballroom
					</div>
					<div className="ballroom-selections">
						<a className="ballroom-selection-option ballroom-selection-option1" 
						onMouseOver={()=>{
							this.setState({first:'#FFF'})
						}}
						onMouseLeave={()=>{
							if(this.state.selected!==1)
							this.setState({first:'#b9a767'})
						}}
						onClick={()=>{
							this.setState({
								first: "#FFF",
								second: "#b9a767",
								third: "#b9a767",
								fourth: "#b9a767",
								fifth: "#b9a767",
								selected: 1
							})
							// this.props.changeSelected(1)
						}}
						>
							<div className="option-image">
								<svg id="svg-option1" width="10vw" height="10vw" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
									<g>
										<title>background</title>
										<rect fill="none" id="canvas_background" height="162" width="162" y="-1" x="-1"/>
									</g>
									<g>
										<title>Layer 1</title>
										<path d="m1.049995,85.1c0,30.2 24.5,54.7 54.7,54.7c9.2,0 17.8,-2.3 25.4,-6.3c8.2,8.4 19.7,13.5 32.3,13.5c25.1,0 45.5,-20.4 45.5,-45.5c0,-22.3 -16.1,-40.9 -37.4,-44.7c2.2,-2.2 4.1,-4.8 4.8,-7.5c0.1,-0.3 0.1,-0.6 0.3,-0.9l0,0l0,0c0.1,-0.4 0.1,-0.9 0.1,-1.3c0,-4 -3.2,-7.3 -7.3,-7.3c-2.5,0 -4.8,1.3 -6.2,3.2c-1.3,-2.1 -3.5,-3.2 -6.2,-3.2c-4,0 -7.3,3.2 -7.3,7.3c0,0.4 0,0.9 0.1,1.3l0,0l0,0c0,0.3 0.1,0.6 0.3,0.9c0.7,2.6 2.6,5.3 4.8,7.5c-0.9,0.1 -1.6,0.3 -2.5,0.6c-8.4,-14.2 -23,-24.2 -40.1,-26.4c2.6,-2.3 5.1,-5.4 6,-8.5c0.1,-0.3 0.1,-0.6 0.3,-0.9l0,0l0,0c0.1,-0.4 0.1,-0.9 0.1,-1.3c0,-4 -3.2,-7.3 -7.3,-7.3c-2.5,0 -4.8,1.3 -6.2,3.2c-1.3,-2.1 -3.5,-3.2 -6.2,-3.2c-4,0 -7.3,3.2 -7.3,7.3c0,0.4 0,0.9 0.1,1.3l0,0l0,0c0,0.3 0.1,0.6 0.3,0.9c0.9,3.1 3.4,6.2 6,8.5c-26.2,3.3 -47.1,26.4 -47.1,54.1zm109.5,0c0,-6.3 -1.2,-12.5 -3.1,-18.2c2.1,-0.3 4.1,-0.6 6.2,-0.6c19.4,0 35.2,15.8 35.2,35.2c0,19.4 -15.8,35.2 -35.2,35.2c-8.9,0 -17.3,-3.4 -23.5,-8.9c12.5,-10.1 20.4,-25.5 20.4,-42.7zm-12.9,-14.8c1.6,4.7 2.6,9.7 2.6,14.8c0,14.1 -6.6,26.6 -16.7,34.6c-3.2,-5.3 -5.1,-11.6 -5.1,-18.2c0,-13.6 7.7,-25.5 19.2,-31.2zm-41.8,-29.7c15.6,0 29.3,8.1 37.3,20.2c-14.8,7.5 -24.9,22.9 -24.9,40.6c0,8.7 2.5,16.7 6.6,23.6c-5.7,2.8 -12.2,4.3 -18.9,4.3c-24.5,0 -44.5,-20 -44.5,-44.5c-0.1,-24.2 19.9,-44.2 44.4,-44.2z" fill={this.state.first} id="XMLID_209_"/>
									</g>
								</svg>
							</div>
							<div className="option-title" style={{
								color: this.state.first
							}}>Trauung</div>
						</a>
						<a  className="ballroom-selection-option ballroom-selection-option2"
						onMouseOver={()=>{
							this.setState({second:'#FFF'})
						}}
						onMouseLeave={()=>{
							if(this.state.selected!==2)
							this.setState({second:'#b9a767'})
						}}
						onClick={()=>{
							this.setState({
								first: "#b9a767",
								second: "#FFF",
								third: "#b9a767",
								fourth: "#b9a767",
								fifth: "#b9a767",
								selected: 2
							})
							// this.props.changeSelected(2)
						}}
						>
							<div className="option-image">
								<svg id="svg-option2" width="10vw" height="10vw" viewBox="0 0 160 160"  xmlns="http://www.w3.org/2000/svg">

									<g>
										<title>background</title>
										<rect fill="none" id="canvas_background" height="162" width="162" y="-1" x="-1"/>
									</g>
									<g>
										<title>Layer 1</title>
										<g id="XMLID_148_">
											<path d="m95.300005,105.400005c3.7,-1.2 14.7,-8.9 17,-17.3c0.1,-0.4 0.3,-0.9 0.3,-1.2c0.1,-0.6 0.1,-1.2 0.1,-1.8c0,-5.3 -4.3,-9.5 -9.5,-9.5c-3.4,0 -6.3,1.8 -7.9,4.3c-1.8,-2.6 -4.7,-4.3 -7.9,-4.3c-5.3,0 -9.5,4.3 -9.5,9.5c0,0.6 0,1.2 0.1,1.8c0,0.3 0.1,0.9 0.3,1.2c2.3,8.4 13.3,16.2 17,17.3z" fill={this.state.second} id="XMLID_26_"/>
											<path d="m52.900005,33.500005l-11.9,0c-1.2,0 -2.2,1 -2.2,2.2l0,3.5c-16.4,0.3 -29.8,13.8 -29.8,30.4l0,37.7c0,16.7 13.6,30.5 30.5,30.5l81,0c16.7,0 30.5,-13.6 30.5,-30.5l0,-37.7c0,-15.1 -11,-27.6 -25.4,-30.1l0,-6.9c0,-5.7 -4.7,-10.4 -10.4,-10.4l-39.5,0c-5.7,0 -10.4,4.7 -10.4,10.4l0,6.5l-10.1,0l0,-3.5c-0.1,-1 -1.1,-2.1 -2.3,-2.1zm87.7,73.8c0,11.1 -9.1,20.1 -20.1,20.1l-81,0c-11.1,0 -20.1,-9.1 -20.1,-20.1l0,-34.6l45.2,0c-2.5,4.7 -3.8,10.1 -3.8,15.7c0,19.1 15.6,34.6 34.6,34.6c19.1,0 34.6,-15.6 34.6,-34.6c0,-5.7 -1.3,-11 -3.8,-15.7l14.5,0l0,34.6l-0.1,0zm-69.5,-18.7c0,-13.4 10.9,-24.2 24.2,-24.2s24.2,10.9 24.2,24.2s-10.9,24.2 -24.2,24.2s-24.2,-10.9 -24.2,-24.2zm4.4,-55.8c0,-0.1 0,-0.1 0,0l39.6,-0.1c0,0 0.1,0 0.1,0.1l0,6.5l-39.8,0l0,-6.5l0.1,0zm-10.4,16.7l55.3,0c10,0 18.3,7.3 19.8,17l-18.3,0c-6.3,-7.8 -16,-12.6 -26.7,-12.6s-20.4,5 -26.7,12.6l-49,0c1.5,-9.7 9.8,-17 19.8,-17l25.8,0z" fill={this.state.second} id="XMLID_63_"/>
										</g>
									</g>
								</svg>
							</div>
							<div className="option-title" style={{
								color: this.state.second
							}}>Shooting</div>
						</a>
						<a  className="ballroom-selection-option ballroom-selection-option3"
						onMouseOver={()=>{
							this.setState({third:'#FFF'})
						}}
						onMouseLeave={()=>{
							if(this.state.selected!==3)
							this.setState({third:'#b9a767'})
						}}
						onClick={()=>{
							this.setState({
								first: "#b9a767",
								second: "#b9a767",
								third: "#FFF",
								fourth: "#b9a767",
								fifth: "#b9a767",
								selected: 3
							})
							// this.props.changeSelected(3)
						}}
						>
							<div className="option-image">
								<svg id="svg-option3" width="10vw" height="10vw" viewBox="0 0 180 180"  xmlns="http://www.w3.org/2000/svg">

									<g>
										<title>background</title>
										<rect fill="none" id="canvas_background" height="182" width="182" y="-1" x="-1"/>
									</g>
									<g>
										<title>Layer 1</title>
										<g id="XMLID_179_">
											<path d="m92.599995,49.600002c4.5,-1.5 17.9,-11 20.7,-21c0.1,-0.4 0.3,-1 0.3,-1.5c0.1,-0.7 0.1,-1.3 0.1,-2.1c0,-6.5 -5.1,-11.6 -11.6,-11.6c-4.1,0 -7.6,2.1 -9.7,5.3c-2.1,-3.2 -5.6,-5.3 -9.7,-5.3c-6.5,0 -11.6,5.1 -11.6,11.6c0,0.7 0,1.5 0.1,2.1c0,0.4 0.1,1 0.3,1.5c3.2,10 16.5,19.5 21.1,21z" fill={this.state.third} id="XMLID_76_"/>
											<path d="m9.199995,142.700002l-3.4,9.7l38.7,13.6l3.4,-9.7l-14.5,-5.1l10,-28.2c2.1,0.4 4.1,0.6 6.2,0.6c4.5,0 9.2,-1 13.5,-3.1c7.5,-3.7 13.2,-10 16,-17.8l6.6,-18.9l15,29c3.5,6.9 9.7,12 17,14.4c2.9,0.9 5.9,1.5 8.9,1.5c3.1,0 6.3,-0.6 9.2,-1.5l12.3,23.9l-12.3,6.3l4.7,9.2l33.7,-17.5l-4.7,-9.2l-12.3,6.3l-12.3,-23.9c11.4,-8.4 15.4,-24.1 8.8,-37l-21.3,-41.4l-40.2,20.7l3.2,-8.9l-60.3,-21.1l-16.6,47.1c-2.8,7.9 -2.3,16.3 1.3,23.8c2.9,6.2 7.8,11.1 13.8,14.2l-10,28.2l-14.4,-5.2zm118.7,-84.7l16.6,32.1c4.8,9.2 1.2,20.7 -8.1,25.5l-1.3,0.7c-9.2,4.8 -20.7,1.2 -25.5,-8.1l-16.6,-32.1l34.9,-18.1zm-98.7,42.9c-2.3,-5 -2.8,-10.7 -0.9,-16l13.1,-37.3l40.8,14.4l-13.1,37.3c-3.8,10.9 -15.7,16.6 -26.6,12.8l-1.5,-0.6c-5.2,-1.8 -9.5,-5.4 -11.8,-10.6z" fill={this.state.third} id="XMLID_113_"/>
										</g>
									</g>
								</svg>
							</div>
							<div className="option-title" style={{
								color: this.state.third
							}}>Party</div>
						</a>
						<a className="ballroom-selection-option ballroom-selection-option4"
						onMouseOver={()=>{
							this.setState({fourth:'#FFF'})
						}}
						onMouseLeave={()=>{
							if(this.state.selected!==4)
							this.setState({fourth:'#b9a767'})
						}}
						onClick={()=>{
							this.setState({
								first: "#b9a767",
								second: "#b9a767",
								third: "#b9a767",
								fourth: "#FFF",
								fifth: "#b9a767",
								selected: 4
							})
							// this.props.changeSelected(4)
						}}
						>
							<div className="option-image">
								<svg id="svg-option4"  width="10vw" height="10vw" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">

									<g>
										<title>background</title>
										<rect fill="none" id="canvas_background" height="162" width="162" y="-1" x="-1"/>
									</g>
									<g>
										<title>Layer 1</title>
										<g id="XMLID_93_">
											<path d="m0.499997,84.05l0,38.9c0,10.4 8.5,18.8 18.8,18.8l85.4,0c10.4,0 18.8,-8.5 18.8,-18.8l0,-7.9l21.6,12.5l0,0c1.5,0.9 3.1,1.3 4.8,1.3c1.6,0 3.2,-0.4 4.8,-1.3c2.9,-1.8 4.8,-4.8 4.8,-8.4l0,-31.2c0,-3.5 -1.8,-6.6 -4.8,-8.4c-2.9,-1.8 -6.6,-1.8 -9.5,0l-21.6,12.5l0,-7.9c0,-9.4 -7,-17.3 -16,-18.6c4.3,-5 6.7,-11.4 6.7,-18.5c0,-15.8 -12.9,-28.8 -28.8,-28.8c-9.7,0 -18.3,4.8 -23.6,12.3c-5.1,-7.5 -13.8,-12.3 -23.6,-12.3c-15.8,0 -28.8,12.9 -28.8,28.8c0,7 2.6,13.5 6.7,18.5c-8.6,1.2 -15.7,9.1 -15.7,18.5zm148.6,5.1l0,28.8l-24.9,-14.4l24.9,-14.4zm-63.5,-60.7c10.1,0 18.3,8.2 18.3,18.3c0,9.7 -7.5,17.5 -16.9,18.3l-3.2,0c-9.4,-0.7 -16.9,-8.7 -16.9,-18.3c0.2,-10 8.6,-18.3 18.7,-18.3zm-23.6,34.9c0.4,0.6 0.9,1.3 1.5,1.9l-2.9,0c0.5,-0.8 1,-1.3 1.4,-1.9zm-23.5,-34.9c10.1,0 18.3,8.2 18.3,18.3c0,9.7 -7.5,17.5 -16.9,18.3l-3.2,0c-9.4,-0.7 -16.9,-8.7 -16.9,-18.3c0.2,-10 8.5,-18.3 18.7,-18.3zm-27.7,55.6c0,-4.7 3.8,-8.5 8.5,-8.5l17,0c0.7,0 1.3,0.1 2.1,0.1c0.7,0 1.3,0 2.1,-0.1l43,0c0.7,0 1.3,0.1 2.1,0.1s1.3,0 2.1,-0.1l17,0c4.7,0 8.5,3.8 8.5,8.5l0,38.9c0,4.7 -3.8,8.5 -8.5,8.5l-85.4,0c-4.7,0 -8.5,-3.8 -8.5,-8.5l0,-38.9l0,0z" fill={this.state.fourth} id="XMLID_44_"/>
											<path d="m61.999997,121.85c3.8,-1.2 15,-9.2 17.3,-17.6c0.1,-0.4 0.3,-0.9 0.3,-1.2c0.1,-0.6 0.1,-1.2 0.1,-1.8c0,-5.4 -4.4,-9.7 -9.7,-9.7c-3.4,0 -6.5,1.8 -8.1,4.4c-1.8,-2.6 -4.7,-4.4 -8.1,-4.4c-5.4,0 -9.7,4.4 -9.7,9.7c0,0.6 0,1.2 0.1,1.8c0,0.3 0.1,0.9 0.3,1.2c2.5,8.4 13.7,16.4 17.5,17.6z" fill={this.state.fourth} id="XMLID_24_"/>
										</g>
									</g>
								</svg>
							</div>
							<div className="option-title" style={{
								color: this.state.fourth
							}}>Video</div>
						</a>
						<a  className="ballroom-selection-option ballroom-selection-option5"
						onMouseOver={()=>{
							this.setState({fifth:'#FFF'})
						}}
						onMouseLeave={()=>{
							if(this.state.selected!==5)
							this.setState({fifth:'#b9a767'})
						}}
						onClick={()=>{
							this.setState({
								first: "#b9a767",
								second: "#b9a767",
								third: "#b9a767",
								fourth: "#b9a767",
								fifth: "#FFF",
								selected: 5
							})
							// this.props.changeSelected(5)
						}}
						>
							<div className="option-image">
								<svg id="svg-option5"   width="10vw" height="10vw" viewBox="0 0 160 160"  xmlns="http://www.w3.org/2000/svg">

										<rect fill="none" id="canvas_background" height="162" width="162" y="-1" x="-1"/>
										<path d="m118.800005,11.450005l-77.9,0l-33.7,31.8l72.8,105.3l72.8,-105.3l-34,-31.8zm16.8,29.9l-30.4,0l10.9,-18.3l19.5,18.3zm-24.8,-19.5l-10.4,17.6l-13.4,-17.6l23.8,0zm-30.2,0l14.8,19.7l-31.1,0l14.8,-19.7l1.5,0zm-8,0l-13.4,17.6l-10.4,-17.6l23.8,0zm-28.9,1.2l10.9,18.3l-30.4,0l19.5,-18.3zm-21.8,23.4l35.1,0l16.1,74.1l-51.2,-74.1zm40.5,0l35.1,0l-17.7,80.9l-17.4,-80.9zm40.3,0l35.1,0l-51.2,74.1l16.1,-74.1z" fill={this.state.fifth} id="XMLID_47_"/>
								</svg>
							</div>
							<div className="option-title" style={{
								color: this.state.fifth
							}}>Making Of</div>
						</a>
					</div>
				</div>
				{/* <BallroomGallery selected={this.state.selected} /> */}
				<div className="ballroom-imageview-container">
					{this.state.imageViewSelected.length > 0 && <div id="ImageView" style={{height: '100vh'}}>
						<img className="blurred-image" src={images[this.state.selected -1][this.state.indexBallroom%photos.length]} alt="asasf"/>
						<div className="selected-image">
						<VirtualizeSwipeableViews
							index={this.state.indexBallroom}
							onChangeIndex={this.handleChangeIndex}
							slideRenderer={this.slideRenderer}
							/>
						</div>
					</div>
					}
					<div className="photos-slider">
						{images && images[this.state.selected-1].map((image,i)=><img onClick={()=>{

							this.changeImageViewSelected(image)
							this.setState({
							indexBallroom: i
							})
						}
						}className={(images[this.state.selected-1][this.state.indexBallroom%photos.length] === image )?("photos-slider-img selected"):("photos-slider-img")} src={image} alt="asjfnaskjfn" key={"photpos"+ i }/>)}
					</div>
				</div>

			</div>
		);
	}
}


