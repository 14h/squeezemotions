
import React, { Component } from 'react';
import { Route } from 'react-router';
import Kontakt from '../Kontakt';
import NavigationBar from '../NavigationBar';
import About from '../About';
import WeddingAbout from '../WeddingAbout'
import Blog from '../Blog';
import Logo from '../Logo';
import Showroom from '../Showroom';
import Reviews from '../Reviews';
// import Login from '../Login';
import Ballroom from '../Ballroom';
import LazyLoad from 'react-lazyload';
import Photografie from '../../Photografie';
import CreativeProducer from '../../CreativeProducer';
import InstagramFeed from '../InstagramFeed';
import NewKontakt from '../NewKontakt'
import Carousel from 'nuka-carousel';

import TransitionGroup from "react-transition-group/TransitionGroup";

// import BlogView from '../BlogView';
// import MultimediaGallery from '../../MultimediaGallery';
import './index.css';

// const persons = Object.values(SqueezeMotionsData.hinterDenKulissen);
// const weddingReviews = Object.values(SqueezeMotionsData.weddingReviews);
// const mainReviews = Object.values(SqueezeMotionsData.mainReviews);
// const photografieArticles = Object.values(SqueezeMotionsData.photografieArticles);
// const videografieArticles = Object.values(SqueezeMotionsData.videografieArticles);
// const creativeProducers = Object.values(SqueezeMotionsData.creativeproducers);
// const SQZM = Object.values(SqueezeMotionsData.SQZM);


function chunk (arr, len) {
  var chunks = [],
      i = 0,
      n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}

export default class SqueezeMotions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 1,
			admin: false,
			imageViewSelected: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
			// reviews: mainReviews,
			// persons : persons,
			overlayHeight:'300px',
			overlayWidth:'0px'
		};
		this.changeSelected = this.changeSelected.bind(this)
		this.switchAdmin = this.switchAdmin.bind(this)
		this.changeImageViewSelected = this.changeImageViewSelected.bind(this)
		
		// About
		this.addPerson = this.addPerson.bind(this);
		this.removePerson = this.removePerson.bind(this);

		// Reviews
		this.addReview = this.addReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
		
		
		
		
		this.getJSONData = this.getJSONData.bind(this);
	}
	getJSONData(){
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
		getJSON('https://us-central1-squeezemotions-backend.cloudfunctions.net/getSqueezeMotionsData',
		  function(err, data) {
			if (err !== null) {
			  console.log('Something went wrong: ' + err);
			} else {
			  currentComponent.setState({
					SqueezeMotionsData: data.Main,
					persons : Object.values(data.Main.hinterDenKulissen),
					weddingReviews : Object.values(data.Main.weddingReviews),
					mainReviews : Object.values(data.Main.mainReviews),
					photografieArticles : Object.values(data.Main.photografieArticles),
					videografieArticles : Object.values(data.Main.videografieArticles),
					creativeProducers : Object.values(data.Main.creativeproducers),
					SQZM : Object.values(data.Main.SQZM),
					ShowroomPhotos : chunk(Object.values(data.Main.Showroom),8),
					ShowroomPhotosSet : Object.values(data.Main.Showroom),
					instagramAccessToken: data.Main.instagramAccessToken
			  })
	
			}
		  });
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

	addPerson(state){
        this.setState((prevState)=> {
            let tempPersons = prevState.persons;
            tempPersons.push({
				name: state.newPersonName,
				description: state.newPersonDescription,
				cover: state.newPersonCover,
				imageSrc: state.newPersonImageSrc
            })
            return {
                    persons: tempPersons,
                    rnewPersonName: '',
					newPersonDescription:'',
					newPersonCover: '',
					newPersonImageSrc: ''
            }
        });
	}
	removePerson(e){
		let coverOfPersonToRemove = e.target.parentElement.parentElement.children[2].innerHTML;
        this.setState((prevState)=> {
            let tempPersons = prevState.persons;
            var index = -1;
            tempPersons.forEach((e,i) => {

                if(e.cover === coverOfPersonToRemove){
                    index = i;
                }
            });
            if (index > -1) {
                tempPersons.splice(index, 1);
            }
            return {
				persons: tempPersons
            }
        });
	}


	// Reviews
	addReview(state){
        this.setState((prevState)=> {
            let tempReviews = prevState.reviews;
            tempReviews.push({
                name:state.reviewName,
				text:state.reviewText,
				instagramLink: state.reviewInstagramLink
            })
            return {
                    reviews: tempReviews,
                    reviewName:'',
					reviewText:'',
					instagramLink:''
            }
        });
    }
    deleteReview(e){
        let reviewTempName = e.target.parentElement.children[2].innerHTML
        let reviewTempText = e.target.parentElement.children[1].innerHTML
        this.setState((prevState)=> {
            let tempReviews = prevState.reviews;
            var index = -1;
            tempReviews.forEach((e,i) => {

                if(e.name === reviewTempName && e.text ===reviewTempText){
                    index = i;
                }
            });
            if (index > -1) {
                tempReviews.splice(index, 1);
            }
            return {
                    reviews: tempReviews
            }
        });
	}
	componentWillMount(){
		this.getJSONData()
	}
	


	render() {
		// var obj = photos.reduce(function(acc, cur, i) {
		// 	acc[i] = cur;
		// 	return acc;
		//   }, {});
		// console.log(JSON.stringify(obj))
		// console.log(Object.values(SqueezeMotionsData.creativeproducers))
		return (
			<div>
			<Route exact path="/wedding" component={ () => (<div>
				<NavigationBar wedding={true} />
				<Logo wedding={true}/>
				<Ballroom />
				{/* <About /> */}
				<Reviews wedding={true} admin={this.state.admin} reviews={this.state.weddingReviews||{}} addReview={this.addReview} deleteReview={this.deleteReview}/>
				<WeddingAbout /> 
				
				{/* <Kontakt wedding={true}/> */}
				<NewKontakt wedding={true}/>
			</div>)} />
			{/* <Route  path="/admin" component={ () => (<Login switchAdmin={this.switchAdmin} />)} /> */}

			<Route exact path="/blog" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="blog"/>
					<Blog />
				</div>
			)} />
			{/* <Route exact path="/blog/:blogId" component={ (params) => (
				<div>
					<NavigationBar wedding={false} selectedNav="blog"/>
					<BlogView selectedBlog={params.match.params.blogId} />
				</div>
			)} /> */}
			{/* <Route exact path="/gallery" component={ () => (<MultimediaGallery />)} /> */}
			<Route exact path="/creativeproducer" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="creativeproducer"/>
					<CreativeProducer  Producers={this.state.creativeProducers||{}}/>
				</div>
			)} />
			<Route exact path="/carousel" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="creativeproducer"/>
					<Carousel 
						renderBottomCenterControls={({ currentSlide }) => (
							// <div>Slide: {currentSlide}</div>
							<div/>
						)}
						renderTopCenterControls={({ currentSlide }) => (
							// <div>Slide: {currentSlide}</div>
							<div/>
						)}
						renderCenterLeftControls={({ previousSlide }) => (
							<div onClick={previousSlide} className="back-button">
							<div className="arrow-wrap">
								<span className="arrow-part-1"></span>
								<span className="arrow-part-2"></span>
								<span className="arrow-part-3"></span>
							</div>
							</div>
						)}
						renderCenterRightControls={({ nextSlide }) => (
							<div onClick={nextSlide} className="next-button">
							<div className="arrow-wrap">
								<span className="arrow-part-1"></span>
								<span className="arrow-part-2"></span>
								<span className="arrow-part-3"></span>
							</div>
							</div>
							
						)}
						edgeEasing="easeCircleOut"
						heightMode="max"
						slidesToShow={2}
						wrapAround={false}
						cellSpacing={ 10 }
						autoplay={true}
						autoplayInterval={2000}
						pauseOnHover={true}
						vertical={true}
						withoutControls={false}
            		>
					<Logo wedding={false}/>
				<Showroom showroomPhotosSet={this.state.ShowroomPhotosSet} photos={this.state.ShowroomPhotos} admin={this.state.admin} changeImageViewSelected={this.changeImageViewSelected}/>

					<Reviews wedding={false} admin={this.state.admin} reviews={this.state.mainReviews||{}} addReview={this.addReview} deleteReview={this.deleteReview}/>
				
					<About  wedding={false}  admin={this.state.admin} persons={this.state.persons||{}} addPerson={this.addPerson} removePerson={this.removePerson}/>


					<InstagramFeed instagramAccessToken={this.state.instagramAccessToken} />



					
					</Carousel>
				</div>
			)} />
			<Route exact path="/photografie" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="photografie"/>
					<Photografie  articles={this.state.photografieArticles||{}}/>
				</div>
			)} />
			<Route exact path="/videografie" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="videografie"/>
					<Photografie video={true} articles={this.state.videografieArticles||{}}/>
				</div>
			)} />
			<Route exact path="/sqzm" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="creativeproducer"/>
					<CreativeProducer  Producers={this.state.SQZM||{}}/>
				</div>
			)} />
			
			<Route  exact path="/" component={ () => (<div>
				<NavigationBar wedding={false}/>
				<Logo wedding={false}/>
				<Showroom showroomPhotosSet={this.state.ShowroomPhotosSet} photos={this.state.ShowroomPhotos} admin={this.state.admin} changeImageViewSelected={this.changeImageViewSelected}/>
				<LazyLoad height={500} once offset={[900, 0]} >
					<Reviews wedding={false} admin={this.state.admin} reviews={this.state.mainReviews||{}} addReview={this.addReview} deleteReview={this.deleteReview}/>
				</ LazyLoad>	
				<LazyLoad height={500} once offset={[900, 0]} >
					<About  wedding={false}  admin={this.state.admin} persons={this.state.persons||{}} addPerson={this.addPerson} removePerson={this.removePerson}/>
				</ LazyLoad>
				<LazyLoad height={500} once placeholder={<div/>} offset={[900, 0]} >
					<InstagramFeed instagramAccessToken={this.state.instagramAccessToken} />
				</ LazyLoad>
				{/* <Kontakt wedding={false}/> */}
				<NewKontakt wedding={false}/>
			</div>)} />
			</div>
			
		);
	}
}
