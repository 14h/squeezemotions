import React, { Component } from 'react';
import Kontakt from '../Kontakt';
import NavigationBar from '../NavigationBar';
import Gallery from '../Gallery';
import About from '../About';
import Blog from '../Blog';
import Logo from '../Logo';
import InstagramFeed from '../InstagramFeed';
import { Route } from 'react-router';

import './index.css';
// import { Fullpage, Slide } from 'fullpage-react';
import Reviews from '../Reviews';
import ContactForm from '../ContactForm';

import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
let options = {
	sectionClassName:     'section',
	anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
	scrollBar:            false,
	navigation:           true,
	verticalAlign:        false,
	sectionPaddingTop:    '69px',
	sectionPaddingBottom: '0px',
	arrowNavigation:      true
  };

export default class SqueezeMotions extends Component {
	render() {
		return (
			<div>
				<Header>
				<a href="#sectionOne">Section One</a>
				<a href="#sectionTwo">Section Two</a>
				<a href="#sectionThree">Section Three</a>
				<a href="#sectionFour">Section Four</a>
				<div className="NavigationBar-compenent"><NavigationBar /></div>
				</Header>
				<Footer>
					<Kontakt />
				</Footer>
				<SectionsContainer className="container" {...options}>
					<Section className="custom-section" verticalAlign="true" color="#FFF"><Logo /></Section>
					<Section color="#FFF"><About /></Section>
					<Section color="#FFF"><Reviews /></Section>
					<Section color="#FFF"><InstagramFeed /></Section>
				</SectionsContainer>
			</div>
			// <div id="SqueezeMotions">
			// 	<Header>
			// 		<a href="#sectionOne" className="opa">Section One</a>
			// 		<a href="#sectionTwo">Section Two</a>
			// 		<a href="#sectionThree">Section Three</a>
			// 	</Header>
			// 	<Footer>
			// 		<a href="" className="opa">Dcoumentation</a>
			// 		<a href="">Example Source</a>
			// 		<a href="">About</a>
			// 	</Footer>
			// 	<SectionsContainer {...options}>
			// 		<Section>Page 1</Section>
			// 		<Section>Page 2</Section>
			// 		<Section>Page 3</Section>
			// 	</SectionsContainer>
			// 	<div className="NavigationBar-compenent"><NavigationBar /></div>
			// 	<div className="app-compenent">
			// 		<Logo />
			// 		<Blog />
			// 		<About />
			// 		<Reviews />
			// 		<ContactForm />
			// 		<InstagramFeed />
			// 		<Route exact path="/about" component={({ match }) => (<About />)}/>
			// 		<Route exact path="/blog" component={({ match }) => (<Blog />)}/>
			// 		<Route exact path="/Gallery" component={({ match }) => (<Gallery />)}/>
			// 	</div>
			// 	<div className="Kontakt-compenent">
			// 		<Kontakt />
			// 	</div>
			// </div>
		);
	}
}

  