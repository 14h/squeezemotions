import React, { Component } from 'react';
// import {Link} from 'react-router-dom';


import './index.css';

export default class Reviews extends Component {
	
	render() {
		return (
			<div id="Reviews">
                <h1 className="reviews-header">Was man über uns sagt</h1>
                <div className="white-border"></div>
                <div className="reviews-list">
                    <div className="review">
                        <h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                        <h4>Lorem Ipsum </h4>
                    </div>
                    <div className="review">
                        <h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                        <h4>Lorem Ipsum </h4>
                    </div>
                    <div className="review">
                        <h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h3>
                        <h4>Lorem Ipsum </h4>
                    </div>
                </div>
			</div>
		);
	}
}


