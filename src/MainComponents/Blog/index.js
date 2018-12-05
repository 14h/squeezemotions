import {Link} from 'react-router-dom';
import './index.css';
import React, { Component } from 'react';
import BlogTemplate from '../BlogTemplate';

export default class Blog extends Component {
	constructor(props){
		super(props);
		this.state={
			progress: 0
		}
		this.getBlogJSONData = this.getBlogJSONData.bind(this);
		

	}
	componentDidMount(){
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
			  currentComponent.setState({
					blogData: data.items
			  })
	
			}
		  });
	}
	render() {
		return (
			<div id="Blog">
					{ this.state.blogData && <div className="blogs-container">
					{this.state.blogData && this.state.blogData.map((blog, i)=>{
						const parser = new DOMParser();
						const html = parser.parseFromString(blog.content, 'text/html');
						const img = html.querySelector('img');
						const url = img ? img.src : '';
						let temDate = new Date(blog.published);
						let publishDate = temDate.toDateString()

						return 	<Link 
											to={"/blog/"+i} 
											style={{textDecoration: 'none'}}
											key={i}
										>
											<BlogTemplate 
												width={'300px'}
												blogImgSRC={url} 
												blogTitle={blog.title}
												blogAuthor={blog.author.displayName}
												blogPublishDate={publishDate}
											/>
										</Link>
					})}
					</div>}
			</div>
		);
	}
}



