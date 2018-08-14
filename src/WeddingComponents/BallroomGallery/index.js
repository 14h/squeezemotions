import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import './index.css';

export default class BallroomGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedImage: '',
			images: [
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
		};
	  }
	

	
	render() {
		return (
			<div id="BallroomGallery" >
				<img className="blurred-image" src={(this.state.images[this.props.selected-1].includes(this.state.selectedImage))? (this.state.selectedImage) : (this.state.images[this.props.selected-1][0])} alt="asasf"/>
				<img className="selected-image" src={(this.state.images[this.props.selected-1].includes(this.state.selectedImage))? (this.state.selectedImage) : (this.state.images[this.props.selected-1][0])} alt="asasf"/>
				<div id="BallroomGallery-container" >
					{/* <img src={this.state.selectedImage} alt="asfafs" /> */}
					<ScrollArea
						speed={0.8}
						className="area"
						contentClassName="content"
						horizontal={true}
						>
						
					
					<div className="side-images">

					{/* <svg onClick={()=>{
						document.getElementsByClassName("side-images")[0].style.marginTop = '-200px';
					}} width="40" height="40"     viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/></svg> */}
						{this.state.images[this.props.selected -1 ].map((e,i)=>{
							return <img src={e} className="images " alt="asfasfa" key={i} onClick={(e)=>{
								this.setState({
									selectedImage: e.target.src
								})
								Object.keys(document.getElementsByClassName('images')).forEach(e => {
									document.getElementsByClassName('images')[e].classList.remove('selected')
								});
								
								e.target.classList.add('selected')
								document.getElementById('BallroomGallery').style.backgroundSize = 'contain'

							}}/>
						})}
					</div>
					</ScrollArea>
				</div>
			</div>
		);
	}
}


