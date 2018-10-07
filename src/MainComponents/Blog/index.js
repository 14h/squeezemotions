import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Parser from 'html-react-parser';
import BlogTemplate from '../BlogTemplate';

import './index.css';


export default class Blog extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedBlog: 0
		}
		this.switchBlogOverlay = this.switchBlogOverlay.bind(this);
		this.getBlogJSONData = this.getBlogJSONData.bind(this);

	}
	switchBlogOverlay(selectedBlog){
		console.log(selectedBlog)
		if(selectedBlog > -1){
			this.setState({selectedBlog:selectedBlog})
		}
		
		if(document.getElementsByClassName('new-blog-overlay')[0].style.display === 'none'){
			document.getElementsByClassName('new-blog-overlay')[0].style.display= 'block'
			document.body.classList.toggle("no-scroll");
			// document.getElementsByClassName('blog-overlay')[0].classList.toggle("scroll");
		}else{

			document.getElementsByClassName('new-blog-overlay')[0].style.display= 'none'
			// document.getElementsByClassName('blog-overlay')[0].classList.toggle("scroll");
			document.body.classList.toggle("no-scroll");
		}
		
	}
	componentDidMount(){
		document.getElementsByClassName('new-blog-overlay')[0].style.display= 'none';
		this.getBlogJSONData();
	}
	getBlogJSONData(){
		let currentComponent = this;
	
		var getJSON = function(url, callback) {
		  var xhr = new XMLHttpRequest();
		  xhr.open('GET', url, true);
		  xhr.setRequestHeader('Access-Control-Allow-Headers', 'true')
		  xhr.responseType = 'json';
		  xhr.onload = function() {
			var status = xhr.status;
			if (status === 200) {
			  callback(null, xhr.response);
			} else {
			  callback(status, xhr.response);
			}
		  };
		  xhr.send();
		};
		getJSON('https://www.googleapis.com/blogger/v3/blogs/7695932236306818641/posts?key=AIzaSyCaNvzhVR7sYQxVO8uXlu2cFL1ioz0gldU',
		  function(err, data) {
			if (err !== null) {
			  console.log('Something went wrong: ' + err);
			} else {
				console.log(data.items)
			  currentComponent.setState({
					blogData: data.items
			  })
	
			}
		  });
	}
	render() {
		return (
			<div id="Blog">
			
				<div className="new-blog-overlay">
					<div className="close-button" onClick={()=>this.switchBlogOverlay()}></div>
					<div className="selected-blog">
						{ this.state.blogData && Parser(this.state.blogData[this.state.selectedBlog].content)}
					</div>
					{/* <div className="cover-image"><img src={this.state.selectedBlog.imageSource} alt="blog"/></div> */}
					
				
				</div>
				{/* <div className="blogs-container">
					{this.state.blogData && this.state.blogData.map((blog, i)=>{
						console.log(Parser(blog.content))
						const parser = new DOMParser();
						const html = parser.parseFromString(blog.content, 'text/html');
						const img = html.querySelector('img');
						const url = img ? img.src : '';
						console.log(url)
						console.log(blog.title)

						return <div onClick={()=>{
									this.switchBlogOverlay(i)
								}} key={"blogNr"+i}>

									<BlogTemplate 
										width={'300px'}
										blogImgSRC={url} 
										blogTitle={blog.title}
										blogAuthor={'abdallah kawji'}
										blogPublishDate={'March 2, 2018'}
									/>
								</div>
					})}
				</div> */}
				<Grid fluid>
					<Row>
					{this.state.blogData && this.state.blogData.map((blog, i)=>{
						console.log(Parser(blog.content))
						const parser = new DOMParser();
						const html = parser.parseFromString(blog.content, 'text/html');
						const img = html.querySelector('img');
						const url = img ? img.src : '';
						let temDate = new Date(blog.published);
						let publishDate = temDate.toDateString()

						return <Col xs={12} md={4} lg={4} onClick={()=>{
									this.switchBlogOverlay(i)
								}} key={"blogNr"+i}>

									<BlogTemplate 
										width={'100%'}
										blogImgSRC={url} 
										blogTitle={blog.title}
										blogAuthor={blog.author.displayName}
										blogPublishDate={publishDate}
									/>
								</Col>
					})}
					</Row>
				</Grid>
				
{/* 			
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
				</Grid> */}
				
			</div>
		);
	}
}


