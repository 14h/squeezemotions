import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './index.css';
const blogs = [
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/0B6KZML.jpg"
	},
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/emLrw9p.jpg"
	},
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/tjgYRZu.jpg"
	},
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/u0HaokY.jpg"
	},
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/jova296.jpg"
	},
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/jova296.jpg"
	},
	{
		blogName: "Manu Digital",
		publishDate: "21.02.2018",
		blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		imageSource: "https://i.imgur.com/YqIZSYm.jpg"
	}
]

export default class About extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedBlog: {
				blogName: "Manu Digital",
				publishDate: "21.02.2018",
				blogBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				imageSource: "https://i.imgur.com/YqIZSYm.jpg"
			}
		}
		this.switchBlogOverlay = this.switchBlogOverlay.bind(this);

	}
	switchBlogOverlay(selectedBlog){
		if(selectedBlog){
			this.setState({selectedBlog:selectedBlog})
		}
		
		if(document.getElementsByClassName('blog-overlay')[0].style.display === 'none'){
			document.getElementsByClassName('blog-overlay')[0].style.display= 'block'
			document.body.classList.toggle("no-scroll");
			// document.getElementsByClassName('blog-overlay')[0].classList.toggle("scroll");
		}else{

			document.getElementsByClassName('blog-overlay')[0].style.display= 'none'
			// document.getElementsByClassName('blog-overlay')[0].classList.toggle("scroll");
			document.body.classList.toggle("no-scroll");
		}
		
	}
	componentDidMount(){
		document.getElementsByClassName('blog-overlay')[0].style.display= 'none'           
	}
	render() {
		return (
			<div id="Blog">
			
				<div className="blog-overlay">
					<div className="close-button" onClick={()=>this.switchBlogOverlay()}></div>
					<div className="cover-image"><img src={this.state.selectedBlog.imageSource} alt="blog"/></div>
					<span>{this.state.selectedBlog.publishDate}</span>
					<h3>{this.state.selectedBlog.blogName}</h3>
					<p>{this.state.selectedBlog.blogBody}</p>
				
				</div>
			
				<Grid fluid>
				
					<Row>
						{blogs.map((e, i)=><Col key={i} className="blog-entry" xs={12} md={12} lg={12}>
						{i%2!==0 ? (
							<Link to={"blog/" + i}>
							<Row className="blog-entry-row" onClick={()=>this.switchBlogOverlay(e)}>
								<Col xs={5} md={5} lg={5}><img src={e.imageSource} alt={e.blogName} width="auto" /></Col>
								<Col xs={7} md={7} lg={7}>
									<Row>
										<Col xs={12} md={12} lg={12}>
											<span>{e.publishDate}</span>
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={12} lg={12}>
											<h3>{e.blogName}</h3>
										</Col>
									</Row>
									
									<Row>
										<Col xs={12} md={12} lg={12}>
											<p>{e.blogBody}</p>
										</Col>
									</Row>
								</Col>
							</Row>
							</Link>
						) : (
							<Row className="blog-entry-row" onClick={()=>this.switchBlogOverlay(e)}>
								
								<Col xs={7} md={7} lg={7}>
									<Row>
										<Col xs={12} md={12} lg={12}>
											<span>{e.publishDate}</span>
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={12} lg={12}>
											<h3>{e.blogName}</h3>
										</Col>
									</Row>
									
									<Row>
										<Col xs={12} md={12} lg={12}>
											<p>{e.blogBody}</p>
										</Col>
									</Row>
								</Col>
								<Col xs={5} md={5} lg={5}><img src={e.imageSource} alt={e.blogName} width="auto" /></Col>
							</Row>
						)}
						
						</Col>)}
					
					</Row>
				</Grid>
				
			</div>
		);
	}
}


