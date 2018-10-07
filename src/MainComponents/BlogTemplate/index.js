import React, { Component } from 'react';

import './index.css';

export default class BlogTemplate extends Component {
	constructor(props){
		super(props);
		this.state={
		}
	}
	componentDidMount(){
	}
	render() {
		return (
			<div className="BlogTemplate" style={{width: this.props.width||'300px'}}>
				<img className="blog-template-img" src={this.props.blogImgSRC} alt={this.props.title}/>
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


