import React, { Component } from 'react';
import { Switch, Route } from 'react-router'

import NavigationBar from '../NavigationBar';
import Blog from '../Blog';
import SqueezeMotions from '../SqueezeMotions';
import BlogSingleView from '../BlogSingleView';
import Kontakt from '../Kontakt';


export default class HomeComponent extends Component {
	state={}
	render() {
		return (
			<div id="Home">
				<Switch>
					<Route exact path="/blog" component={ () => (
						<div>
							<NavigationBar wedding={false} selectedNav="blog"/>
							<Blog/>
							<Kontakt wedding={false}/>
							
						</div>
					)} />
					<Route exact path="/blog/:blogId" component={ BlogSingleView } />
					<Route component={SqueezeMotions}/>
				</Switch>
			</div>
		);
	}
}
