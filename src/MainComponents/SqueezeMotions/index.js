import React, { Component } from 'react';
import { Route } from 'react-router';

import Kontakt from '../Kontakt';
import NavigationBar from '../NavigationBar';
import About from '../About';
import Blog from '../Blog';
import Logo from '../Logo';
import Showroom from '../Showroom';
import ImageView from '../ImageView';
import Reviews from '../Reviews';
import Login from '../Login';

// import Wedding from '../../WeddingComponents/Wedding';

import CreativeProducer from '../../CreativeProducer';

import './index.css';

// import Home from '../AntHome';
import InstagramFeed from '../InstagramFeed';
import MultimediaGallery from '../../MultimediaGallery';
// import ContactForm from '../ContactForm';
// import Gallery from '../Gallery';

// import Ballroom from '../../WeddingComponents/Ballroom';

export default class SqueezeMotions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 1,
			admin: false,
			imageViewSelected: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
			database:{
				
			},
			appState:{

			},
			persons:[
				{
					name: 'Jeelz',
					description:'Video & Produktion',
					cover: 'Jeels ist unser Allrounder. Ob Foto oder Video, beides fasziniert ihn. Es fing an mit einigen Urlaubs- und Hochzeitsvideos bis schließlich die Entscheidung fiel, alles auf professionellere Beine zu stellen. Squeezemotions war geboren.',
					imageSrc: './images/01.jpg'
				},
				{
					name: 'Larissa',
					description:'Fotografie',
					cover: 'Ihr wollt kreative Fotografie? Larissa ist sprichwörtlich für jedes Abenteuer zu haben. Sie fotografiert von Afrika über Island bis nach Zürich alles was ihr vor die Linse kommt. Und das mit atemberaubenden Ergebnissen. Überzeugt Euch selbst!',
					imageSrc: './images/02.png'
				},
			],
			reviews:[
                {
                    name: "0Lorasdaem",
					text: "Lorem Ipsum is simdagbsa ply dummy text of the printing and typesetting industry.",
					instagramLink: "https://www.instagram.com/so_called_ryan/"
                },
                {
                    name: "1Lorefdsgm",
                    text: "Lorem Idasdpsum is siadmply dummy text of the printing and typesetting industry."
				},
				{
                    name: "2Lorasdaem",
                    text: "Lorem Ipsum is siasdmdaply dummy text of the printing and typesetting industry."
                },
                {
                    name: "3Lorefdsgm",
                    text: "Lorem Ipsum is siadmplyasf  dummy text of the printing and typesetting industry."
				},
				{
                    name: "4Lorasdaem",
                    text: "Lorem Ipsum is simdaplagsy dummy text of the printing and typesetting industry."
                },
                {
                    name: "5Lorefdsgm",
                    text: "Lorem Ipsum is sigh4admply dummy text of the printing and typesetting industry."
				},
				{
                    name: "6Lorasdaem",
                    text: "Lorem Ipsum is asdsimdaply dummy text of the printing and typesetting industry."
                },
                {
                    name: "7Lorefdsgm",
                    text: "Lorem Ipsavdum is siadmply dummy text of the printing and typesetting industry."
				},
				{
                    name: "8Lorasdaem",
                    text: "Lorem Iaspsum is simdaply dummy text of the printing and typesetting industry."
                },
                {
                    name: "9Lorefdsgm",
                    text: "Lorem Ipsfwum is siadmply dummy text of the printing and typesetting industry."
                }
			],
			photos:[
				{ src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
				{ src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
				{ src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
				{ src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
				{ src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
				{ src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
				{ src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
				{ src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
				{ src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
			],
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
		console.log(e)
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
	


	render() {

		return (
			<div>
			{/* <Route exact path="/wedding" component={ () => (<Wedding />)} /> */}
			{/* <Route  path="/admin" component={ () => (<Login switchAdmin={this.switchAdmin} />)} /> */}
			<Route exact path="/imageview" component={ () => (<ImageView photos={this.state.photos} imageViewSelected={this.state.imageViewSelected} changeImageViewSelected={this.changeImageViewSelected}/>)} />
			{/* <Route exact path="/blog" component={ () => (<Blog />)} /> */}
			<Route exact path="/gallery" component={ () => (<MultimediaGallery />)} />
			<Route exact path="/creativeproducer" component={ () => (<CreativeProducer />)} />
			
			<Route  exact path="/" component={ () => (<div>
				
				<NavigationBar wedding={false}/>
				
				<Logo/>
				
				<Showroom  admin={this.state.admin} changeImageViewSelected={this.changeImageViewSelected}/>
				{/* <ImageView imageViewSelected={this.state.imageViewSelected} changeImageViewSelected={this.changeImageViewSelected}/> */}
				<Reviews admin={this.state.admin} reviews={this.state.reviews} addReview={this.addReview} deleteReview={this.deleteReview}/>
				
				<About admin={this.state.admin} persons={this.state.persons} addPerson={this.addPerson} removePerson={this.removePerson}/>
				<InstagramFeed />
				<Kontakt />

				{/* <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" width="501.4" height="377" 
				onMouseOver={(e)=>{
					var bodyRect = document.body.getBoundingClientRect(),
					elemRect = e.target.getBoundingClientRect(),
					offset   = elemRect.top - bodyRect.top;
					// var rect = e.target.getBoundingClientRect();
					console.log(offset);
					if(this.state.overlayHeight !== e.target.height || this.state.overlayWidth !== e.target.width){
						this.setState({
							overlayWidth: e.target.width,
							overlayHeight: e.target.height,
							overlayOffset:offset,
							overlayLeft: elemRect.left
						})
					}
				}}
				/> */}
				{/* <div id="overlay" 
				onMouseLeave={(e)=>{

					this.setState({
						overlayWidth: 0,
						overlayHeight: 0,
						overlayOffset:0,
						overlayLeft: 0
					})
				}}
				style={{background: 'rgb(0, 0, 0, 0.2)',height:this.state.overlayHeight, width:this.state.overlayWidth, position:'absolute', top:this.state.overlayOffset, left:this.state.overlayLeft}}></div> */}
				
				{/* < Ballroom /> */}
				
			</div>)} />
			{/* <Home/> */}
			</div>
			
		);
	}
}

  