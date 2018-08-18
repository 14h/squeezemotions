import React, { Component } from 'react';


// https://api.instagram.com/v1/users/self/media/recent/?access_token=1517582328.ad06786.fe6f14e1eecb4e7ca967eb8ab52acc34

import './index.css';

export default class InstagramFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.getJSONData = this.getJSONData.bind(this);
    }
    getJSONData(){
        let currentComponent = this;
    
        var getJSON = function(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
        //   xhr.setRequestHeader('Access-Control-Allow-Headers', 'true')
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
        getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token=1517582328.ad06786.fe6f14e1eecb4e7ca967eb8ab52acc34',
          function(err, data) {
            if (err !== null) {
              alert('Something went wrong: ' + err);
            } else {
              currentComponent.setState({
                data: data.data
              })
            }
          });
    }
      
    componentWillMount(){
        this.getJSONData();
    }
	render() {
		return (
			<div id="InstagramFeed">
                <div className="section-header">Wir auf Insta</div>
				<div className="white-border" />
                <div className="feed">
                    {this.state.data && this.state.data.map((post,i)=><a className="instagram-post-link" href={post.link}  key={"instagram-post-href-"+i}  target="_blank" ><div className="feed-element" key={"instagram-post-"+i}>
                                                                            {/* <div className="feed-element-img"> */}
                                                                            <img  className="feed-element-img" src={post.images.low_resolution.url} alt="profile"/>
                                                                                <div className="insta-overlay" style={{
                                                                                    height: post.images.low_resolution.height * 269 /post.images.low_resolution.width,
                                                                                    marginTop: -post.images.low_resolution.height * 269 /post.images.low_resolution.width - 5,
                                                                                }}>
                                                                                {/* <div className="insta-overlay" style={{
                                                                                    height: post.images.standard_resolution.height * 269 /post.images.standard_resolution.width,
                                                                                    marginTop: -post.images.standard_resolution.height * 269 /post.images.standard_resolution.width - 5,
                                                                                }}> */}
                                                                                    <div className="insta-overlay-content">
                                                                                        <div className="insta-overlay-content-item"><i className="fa fa-heart"></i><span>  {post.likes.count}</span></div>
                                                                                        <div className="insta-overlay-content-item"><i className="fa fa-comment"></i><span>  {post.comments.count}</span></div>
                                                                                    </div>
                                                                                </div>

                                                                            {/* </div> */}
                                                                            <div className="feed-element-text">
                                                                            {/* {console.log(post)} */}
                                                                            </div>
                                                                            <div className="feed-element-user">
                                                                                <div className="profile-pic"><img width="30px" src={post.user.profile_picture} alt="profile"/></div>
                                                                                <div className="feed-element-text">
                                                                                <b>so_called_ryan </b>
                                                                                    {post.caption ? (post.caption.text) : ('')}
                                                                                </div>
                                                                            </div>
                                                                        </div></a>
                    )}
                    
                </div>
			</div>
		);
	}
}


