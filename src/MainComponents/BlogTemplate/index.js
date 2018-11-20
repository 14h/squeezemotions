// import Img from 'react-image'
// import VisibilitySensor from 'react-visibility-sensor'
import React, { Component } from 'react';

import './index.css';

export default class BlogTemplate extends Component {
	constructor(props){
		super(props);
		this.state={
			imageLoaded: false,
		}
	}
	handleImageLoaded(){
		this.setState({imageLoaded:true})
	}
	render() {

		let imageClassName = this.state.imageLoaded ? ("blog-template-img") : ("blog-template-img not-loaded")
		return (
			<div className="BlogTemplate" style={{width: this.props.width||'300px'}}>
				{/* <VisibilitySensor>
    				<Img 
					className={imageClassName }
					src={this.props.blogImgSRC} 
					onLoad={this.handleImageLoaded.bind(this)} 
					alt={this.props.title}
				/>
				</VisibilitySensor> */}
				<img
					className={imageClassName }
					src={this.props.blogImgSRC} 
					onLoad={this.handleImageLoaded.bind(this)} 
					alt={this.props.title}
				/>
				<div className="blog-template-title">
					{this.props.blogTitle}
				</div>
				<div className="blog-template-meta">
					<span className="blog-template-author">{this.props.blogAuthor},</span> <span className="blog-template-publish-date">{this.props.blogPublishDate}</span>
				</div>
			</div>
		);
	}
}


