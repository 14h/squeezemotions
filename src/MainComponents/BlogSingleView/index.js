import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import ScrollManager from 'window-scroll-manager'

const sm = new ScrollManager();

class ProgressRing extends React.Component {
	constructor(props) {
	  super(props);
	  
	  const { radius, stroke } = this.props;
	  
	  this.normalizedRadius = radius - stroke * 2;
	  this.circumference = this.normalizedRadius * 2 * Math.PI;
	}
	
	render() {
	  const { radius, stroke, progress } = this.props;
  
	  const strokeDashoffset = (this.circumference  - progress / 100 * this.circumference)  ;
	
	  return (
          <div className={(progress > 99)?("progress-ring-wrapper animate"):("progress-ring-wrapper ")}>
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke={(progress > 99)?("#FFF"):("transparent")}
                    strokeWidth={4}
                    fill="transparent"
                    r={ this.normalizedRadius + 1.7  }
                    cx={ radius }
                    cy={ radius }
                /> 
                <circle
                    stroke="green"
                    fill={(progress > 99)?("#FFF"):("transparent")}
                    strokeWidth={ stroke }
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    style={ { strokeDashoffset, transition: 'stroke-dashoffset 0.1s linear' } }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />
                {(progress > 99)?(<path 
                                    fill="green" 
                                    fillOpacity="1"  
                                    transform="scale(0.212,0.212)translate(18,18)" 
                                    d="
                                    m103.6,4.7
                                    c-56.1,-2.6 -102.2,43.6 -99.6,99.6
                                    c2.2,48.9 41.8,88.4 90.7,90.7
                                    c56.1,2.6 102.2,-43.6 99.6,-99.6
                                    c-2.2,-48.9 -41.8,-88.5 -90.7,-90.7z
                                    m-9.1,10c26.7,-1.4 50.9,9.5 67.5,27.5
                                    l-19.5,5.3
                                    c-5.8,-6.9 -14.2,-14.8 -25.8,-14.8
                                    l-32.9,0
                                    c-4.9,0 -10.2,1.9 -13.8,3.9
                                    c-4.7,2.6 -13.8,11.6 -16.4,15.4
                                    c-2.7,3.9 -3.3,8.6 -3.3,12.2l0,11.6
                                    c0,9.9 6,20.4 17.3,23.4l57.8,15.9
                                    c1.1,0.2 2.7,1.7 2.7,3.6l0,12.6
                                    c0,1.7 -6.7,8.1 -10,9.9
                                    c0,0 -0.4,0.2 -1.3,0.2l-36.4,0
                                    c-1.1,0 -1.6,-0.2 -1.6,-0.2
                                    c-5.3,-3.9 -9.8,-9.9 -9.8,-9.9
                                    l-22,7.1
                                    c0,0 0,0 0,0.1l-20.2,6.4
                                    c-9,-14.4 -13.9,-31.7 -12.8,-50.2
                                    c2.6,-43 37.4,-77.7 80.5,-80z
                                    m10.4,170.2
                                    c-28.2,1.9 -53.8,-10.1 -70.6,-29.8
                                    l19.7,-6.3
                                    c5.8,6.8 14.2,14 25.1,14
                                    l38.7,0
                                    c4.7,0 10.2,-1.9 13.8,-3.9
                                    c4.7,-2.6 13.6,-11.6 16.2,-15.4
                                    c2.9,-3.9 3.6,-8.6 3.6,-12.2
                                    l0,-13.5
                                    c0,-9.6 -6,-20.4 -17.3,-23.4
                                    l-58,-16.3
                                    c-1.1,-0.2 -2.4,-1.7 -2.4,-3.6
                                    l0,-10.7
                                    c0,-1.7 6,-7.7 9.6,-9.4
                                    c0,0 0.4,-0.2 1.3,-0.2
                                    l31.3,0c1.1,0 1.3,0.2 1.3,0.2
                                    c4.7,2.8 9.8,9.9 9.8,9.9l5.1,-1.4
                                    l0,0
                                    l38,-10.4
                                    c9.7,14.5 15.1,32.1 14.3,51.1
                                    c-1.9,43.1 -36.3,78.4 -79.5,81.3z" 
                                />):(<path fill="green" transform="translate(15,15)" d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z"></path>)}
            </svg>
        </div>
	  );
	}
  }


export default class BlogSingleView extends Component {
	constructor(props){
		super(props);
		this.state={
			progress: 0
		}
        this.getBlogJSONData = this.getBlogJSONData.bind(this);
	}
	getBlogJSONData(){
        let currentComponent = this;
        window.addEventListener('window-scroll', (e)=> {
            let progress = 0;
            if(document.getElementById('selected-blog')){
                progress = Math.floor( 100 * sm.getScrollPosition().scrollPositionY /  (document.getElementById('selected-blog').getClientRects()[0].height - window.innerHeight -100) );
            }
            if(progress < 0 ) progress = 0;
            if(progress > 100 ) progress = 100;
            currentComponent.setState({progress: progress});
        });
		let getJSON = (url, callback) => {
		  let xhr = new XMLHttpRequest();
		  xhr.open('GET', url, true);
		  xhr.setRequestHeader('Access-Control-Allow-Headers', 'true')
		  xhr.responseType = 'json';
		  xhr.onload = ()=> {
			let status = xhr.status;
			if (status === 200) {
			  callback(null, xhr.response);
			} else {
			  callback(status, xhr.response);
			}
		  };
		  xhr.send();
		};
		getJSON('https://www.googleapis.com/blogger/v3/blogs/7695932236306818641/posts?key=AIzaSyCaNvzhVR7sYQxVO8uXlu2cFL1ioz0gldU',
		  (err, data) => {
			if (err !== null) {
			  console.log('Something went wrong: ' + err);
			} else {
			  currentComponent.setState({
					blogData: data.items
			  })
	
			}
		  });
    }
    componentWillMount(){
        this.getBlogJSONData();
        
    }
	render() {
		return (
			<div id="BlogSingleView">
				<div className="new-blog-overlay">
						<Link to="/blog" className="close-ring" >
                            <ProgressRing
                                radius={ 25 }
                                stroke={ 2 }
                                progress={ this.state.progress}
                            />
						</Link>
						<div id="selected-blog" className="selected-blog">
							{ this.state.blogData && Parser(this.state.blogData[this.props.match.params.blogId].content)}
						</div>
				</div>
        
			</div>
		);
	}
}


