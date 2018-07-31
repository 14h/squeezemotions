import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import ScrollArea from 'react-scrollbar';


import './index.css';

export default class ImageView extends Component {
    constructor(props) {
		super(props);
		this.state = {
            height: '100vh',
            display: 'block'
            // imagesFetched: props.images[props.showroomSelection],
            // imageSelected: {}
        };
        this.addReview = this.addReview.bind(this);
    }
    addReview(){
    }
	render() {
		return (
            <div id="ImageViewContainer">
			{this.props.imageViewSelected.length > 0 && <div id="ImageView" style={{height: this.state.height}}>
                <span style={{display: this.state.display}} className="close" onClick={()=>{
                    this.setState({
                        height: '0vh',
                        display: 'none'
                    });
                    this.props.changeImageViewSelected('')
                    
                }}></span>

				<img className="blurred-image" src={this.props.imageViewSelected} alt="asasf"/>
				<img className="selected-image" src={this.props.imageViewSelected} alt="asassf"/>
            </div>
            }
            </div>
		);
	}
}
