import React, { Component } from 'react';
// import Kontakt from '../Kontakt';
import NavigationBar from '../NavigationBar';
// import Gallery from '../Gallery';
import About from '../About';
// import Blog from '../Blog';
import Logo from '../Logo';
// import InstagramFeed from '../InstagramFeed';
import { Route } from 'react-router';
// import Home from '../AntHome';
import Showroom from '../Showroom';
import ImageView from '../ImageView';


import './index.css';
// import { Fullpage, Slide } from 'fullpage-react';
import Reviews from '../Reviews';
// import ContactForm from '../ContactForm';

// import Wedding from '../../WeddingComponents/Wedding';
// import Ballroom from '../../WeddingComponents/Ballroom';

export default class SqueezeMotions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 1,
			admin: false,
			imageViewSelected: ''
		};
		this.changeSelected = this.changeSelected.bind(this)
		this.switchAdmin = this.switchAdmin.bind(this)
		this.changeImageViewSelected = this.changeImageViewSelected.bind(this)


	}
	changeImageViewSelected(newImageViewSelected){
		this.setState({imageViewSelected: newImageViewSelected});
	}
	switchAdmin(){
        this.setState((prevState)=>{
            return{
            admin:!prevState.admin
        }})
    }
	changeSelected(i){
		this.setState({selected: i})
	}
	render() {
		return (
			<div>
			{/* <Route exact path="/wedding" component={ () => (<Wedding />)} /> */}
			<Route exact path="/imageview" component={ () => (<ImageView imageViewSelected={this.state.imageViewSelected} changeImageViewSelected={this.changeImageViewSelected}/>)} />
			<Route exact path="/" component={ () => (<div>
				<button onClick={this.switchAdmin}> Switch Admin</button>
				<NavigationBar/>
				
				<Logo/>
				<Showroom  admin={this.state.admin} changeImageViewSelected={this.changeImageViewSelected}/>
				<ImageView imageViewSelected={this.state.imageViewSelected} changeImageViewSelected={this.changeImageViewSelected}/>
				<Reviews admin={this.state.admin} />
				
				<About admin={this.state.admin}/>
				{/* <Kontakt /> */}
				{/* < Ballroom /> */}
				
			</div>)} />
			{/* <Home/> */}
			</div>
			
		);
	}
}

  