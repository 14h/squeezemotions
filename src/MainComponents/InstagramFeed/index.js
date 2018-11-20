import React, { Component } from 'react';
import Measure from 'react-measure';


// https://api.instagram.com/v1/users/self/media/recent/?access_token=1517582328.ad06786.fe6f14e1eecb4e7ca967eb8ab52acc34

import './index.css';

export default class InstagramFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: -1,
            
        }
        this.getJSONData = this.getJSONData.bind(this);
    }
    getJSONData(){
        if(!this.props.instagramAccessToken) return;
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
        getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+ this.props.instagramAccessToken,
          function(err, data) {
            if (err !== null) {
              console.log('Something went wrong: ' + err);
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
        const width = this.state.width;
		return (
			<div id="InstagramFeed">
                <div className="section-header">Wir auf Insta</div>
				<div className="white-border" />
                <div className="feed">
                <Measure  key={"instagram-post-href-measure-"} bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
                {
                    ({measureRef}) => {
                        if (width < 1 ){
                            return <div ref={measureRef}></div>;
                        }
                        let columns = 2;
                        if (width >= 680){
                            columns = 4;
                        }
                        if (width >= 1024){
                            columns = 6;
                        }
                        if (width >= 1824){
                            columns = 7;
                        }
                    
                    return <a className="instagram-post-link" href="https://www.instagram.com/squeezemotions/"  key={"instagram-post-href-"}  target="_blank" rel="noopener noreferrer">
                        <div className="feed-element instagram-page" key={"instagram-post"} style={{
                            width: "calc(100vw/"+columns+" - 6px)",
                            height: "calc(100vw/"+columns+" - 6px)",
                            borderRadius: '50%'
                        }}>
                            
                            <svg  style={{
                                marginLeft:"25%",
                                }}width="50%" height="auto"   viewBox="0 0 210 210"   xmlns="http://www.w3.org/2000/svg">
                                    {/* <rect fill="none" id="canvas_background" height="212" width="212" y="-1" x="-1"/> */}
                                    <path id="svg_7" d="m103.6,4.7c-56.1,-2.6 -102.2,43.6 -99.6,99.6c2.2,48.9 41.8,88.4 90.7,90.7c56.1,2.6 102.2,-43.6 99.6,-99.6c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7zm-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5l-19.5,5.3c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8l-32.9,0c-4.9,0 -10.2,1.9 -13.8,3.9c-4.7,2.6 -13.8,11.6 -16.4,15.4c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6c0,9.9 6,20.4 17.3,23.4l57.8,15.9c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6c0,1.7 -6.7,8.1 -10,9.9c0,0 -0.4,0.2 -1.3,0.2l-36.4,0c-1.1,0 -1.6,-0.2 -1.6,-0.2c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9l-22,7.1c0,0 0,0 0,0.1l-20.2,6.4c-9,-14.4 -13.9,-31.7 -12.8,-50.2c2.6,-43 37.4,-77.7 80.5,-80zm10.4,170.2c-28.2,1.9 -53.8,-10.1 -70.6,-29.8l19.7,-6.3c5.8,6.8 14.2,14 25.1,14l38.7,0c4.7,0 10.2,-1.9 13.8,-3.9c4.7,-2.6 13.6,-11.6 16.2,-15.4c2.9,-3.9 3.6,-8.6 3.6,-12.2l0,-13.5c0,-9.6 -6,-20.4 -17.3,-23.4l-58,-16.3c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6l0,-10.7c0,-1.7 6,-7.7 9.6,-9.4c0,0 0.4,-0.2 1.3,-0.2l31.3,0c1.1,0 1.3,0.2 1.3,0.2c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4l0,0l38,-10.4c9.7,14.5 15.1,32.1 14.3,51.1c-1.9,43.1 -36.3,78.4 -79.5,81.3z" fill="#000"/>
                                    <circle  strokeWidth="5.5" fill="#000"  stroke="none" r="16.4" cy="185.7" cx="185.3" />
                            </svg>

                            <div style={{textAlign:'center'}}>

                                <b></b>

                            </div>
                        </div>
                    </a>
                    }
                }
                </Measure>
                        
                    {this.state.data && this.state.data.map((post,i)=>{
                        return <Measure  key={"instagram-post-href-measure-"+i} bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
                        {
                            ({measureRef}) => {
                            if (width < 1 ){
                                return <div ref={measureRef}></div>;
                            }
                            let columns = 2;
                            if (width >= 680){
                                columns = 4;
                            }
                            if (width >= 1024){
                                columns = 6;
                            }
                            if (width >= 1824){
                                columns = 7;
                            }
                            
                            return <a className="instagram-post-link" href={post.link}  key={"instagram-post-href-"+i}  target="_blank" rel="noopener noreferrer">
                                        <div className="feed-element" key={"instagram-post-"+i} style={{
                                            width: "calc(100vw/"+columns+" - 6px)"
                                        }}>
                
                                            <img  className="feed-element-img" src={post.images.low_resolution.url} alt="profile"/>
                                                <div className="insta-overlay" style={{
                                                    height: post.images.low_resolution.height * width/columns /post.images.low_resolution.width -3,
                                                    marginTop: -post.images.low_resolution.height *  width/columns /post.images.low_resolution.width ,
                                                    width: "calc(100vw/"+columns+" - 6px)"
                                                }}>
                                                    <div className="insta-overlay-content">
                                                        <div className="insta-overlay-content-item"><i className="fa fa-heart"></i><span>  {post.likes.count}</span></div>
                                                        <div className="insta-overlay-content-item"><i className="fa fa-comment"></i><span>  {post.comments.count}</span></div>
                                                    </div>
                                                </div>
                                            <div className="feed-element-text">
                                            </div>
                                            <div className="feed-element-user">
                                                <div className="profile-pic"><img width="30px" src={post.user.profile_picture} alt="profile"/></div>
                                                <div className="feed-element-text">
                                                <b>Squeeze Motions </b>
                                                    {post.caption ? (post.caption.text) : ('')}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                            }
                        }
                        </Measure>
                    }
                    )}
                    
                </div>
                {/* <div 
                    className="feed-element last-message"  
                    style={{
                                            width: "100vw",
                                            height: "100px"

                            }}
                >
                To See more, scroll right, or visit our Instagram Profile <a href="https://wwww.instagram.com/squeezemotions" target="_blank" rel="noopener noreferrer" ><svg width="30px" height="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style={{'enableBackground':'new 0 0 512 512'}}>
                                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-46.0041" y1="634.1208" x2="-32.9334" y2="647.1917" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <path style={{fill:'url(#SVGID_1_)'}} d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192
                                                    c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112
                                                    V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/>
                                                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-42.2971" y1="637.8279" x2="-36.6404" y2="643.4846" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <path style={{fill:'url(#SVGID_2_)'}} d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128
                                                    S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80
                                                    C336,300.096,300.096,336,256,336z"/>
                                                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.5456" y1="644.5793" x2="-34.7919" y2="645.3331" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <circle style={{fill:'url(#SVGID_3_)'}} cx="393.6" cy="118.4" r="17.056"/>
                                            </svg></a>
                </div> */}
			</div>
		);
	}
}



