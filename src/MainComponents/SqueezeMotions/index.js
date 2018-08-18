import React, { Component } from 'react';
import { Route } from 'react-router';

import Kontakt from '../Kontakt';
import NavigationBar from '../NavigationBar';
import About from '../About';
import WeddingAbout from '../WeddingAbout'
import Blog from '../Blog';
import Logo from '../Logo';
import Showroom from '../Showroom';
// import ImageView from '../ImageView';
import Reviews from '../Reviews';
// import Login from '../Login';
import Ballroom from '../Ballroom';
import LazyLoad from 'react-lazyload';

// import Wedding from '../../WeddingComponents/Wedding';

import CreativeProducer from '../../CreativeProducer';

import './index.css';

// import Home from '../AntHome';
import InstagramFeed from '../InstagramFeed';
import MultimediaGallery from '../../MultimediaGallery';
// import ContactForm from '../ContactForm';
// import Gallery from '../Gallery';

// import Ballroom from '../../WeddingComponents/Ballroom';
const creativeProducers = [
    {
        name: 'Lukas Jahzzy Pete Dubting',
        thing: 'DeSign',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        imageSRC: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/19894915_10211753938022550_5304336737176909157_n.jpg?_nc_cat=0&oh=8f3c30b5c0b07f344bf6823d00709e49&oe=5BF75129',
        themeColor: "rgb(100, 212, 135)",
        
    },
    {
        name: 'Abdallah Kawji',
        thing: 'Dev',
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageSRC: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/29178143_1688937441202498_9061295218237636608_o.jpg?_nc_cat=0&oh=08cb982f647c5b081dc991b5b17eaede&oe=5BF6B545',
        themeColor: "rgb(0, 0, 0)",
        
    },
    {
        name: 'Jeels Szepanek',
        thing: 'Consult',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        imageSRC: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/32336664_10214718303566349_2363335819395072_o.jpg?_nc_cat=0&oh=859a277c1208ed3d3c50279f65c0e8d4&oe=5BFEF7B9',
        themeColor: "rgb(246, 180, 41)",
    },
]
const SQZM = [
    {
        name: 'Larissa Jablonka',
        thing: 'Fotografie',
        text: "Ihr wollt kreative Fotografie? Larissa ist sprichwörtlich für jedes Abenteuer zu haben. Sie fotografiert von Afrika über Island bis nach Zürich alles was ihr vor die Linse kommt. Und das mit atemberaubenden Ergebnissen. Überzeugt Euch selbst!",
        imageSRC: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/39111149_2667764673249686_4312954017740226560_n.jpg?_nc_cat=0&oh=a2286143387a78117370167057715334&oe=5C04D941',
        themeColor: "rgb(100, 212, 135)",
        
    },
    {
        name: 'Jeels Szepanek',
        thing: 'Video & Produktion',
        text: "Jeels ist unser Allrounder. Ob Foto oder Video, beides fasziniert ihn. Es fing an mit einigen Urlaubs- und Hochzeitsvideos bis schließlich die Entscheidung fiel, alles auf professionellere Beine zu stellen. Squeezemotions war geboren.",
        imageSRC: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/32336664_10214718303566349_2363335819395072_o.jpg?_nc_cat=0&oh=859a277c1208ed3d3c50279f65c0e8d4&oe=5BFEF7B9',
        themeColor: "rgb(252, 30, 79)",
        
    }
]

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
					imageSrc: 'https://i.imgur.com/h0tkn76.jpg'
				},
				{
					name: 'Larissa',
					description:'Fotografie',
					cover: 'Ihr wollt kreative Fotografie? Larissa ist sprichwörtlich für jedes Abenteuer zu haben. Sie fotografiert von Afrika über Island bis nach Zürich alles was ihr vor die Linse kommt. Und das mit atemberaubenden Ergebnissen. Überzeugt Euch selbst!',
					imageSrc: 'https://i.imgur.com/GCZGRff.jpg'
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
			<Route exact path="/wedding" component={ () => (<div>
				<NavigationBar wedding={true} />
				<Logo wedding={true}/>
				<Ballroom />
				{/* <About /> */}
				<Reviews wedding={true} admin={this.state.admin} reviews={this.state.reviews} addReview={this.addReview} deleteReview={this.deleteReview}/>
				<WeddingAbout /> 
				
				{/* <Kontakt wedding={true}/> */}
			</div>)} />
			{/* <Route  path="/admin" component={ () => (<Login switchAdmin={this.switchAdmin} />)} /> */}

			<Route exact path="/blog" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="blog"/>
					<Blog />
				</div>
			)} />
			<Route exact path="/gallery" component={ () => (<MultimediaGallery />)} />
			<Route exact path="/creativeproducer" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="creativeproducer"/>
					<CreativeProducer  Producers={creativeProducers}/>
				</div>
			)} />
			<Route exact path="/sqzm" component={ () => (
				<div>
					<NavigationBar wedding={false} selectedNav="creativeproducer"/>
					<CreativeProducer  Producers={SQZM}/>
				</div>
			)} />
			
			<Route  exact path="/" component={ () => (<div>
				
				<NavigationBar wedding={false}/>
				<Logo wedding={false}/>
				<Showroom  admin={this.state.admin} changeImageViewSelected={this.changeImageViewSelected}/>
				<LazyLoad height={500} once offset={[900, 0]} >
					<Reviews wedding={false} admin={this.state.admin} reviews={this.state.reviews} addReview={this.addReview} deleteReview={this.deleteReview}/>
				</ LazyLoad>	
				<LazyLoad height={500} once offset={[900, 0]} >
					<About  wedding={false}  admin={this.state.admin} persons={this.state.persons} addPerson={this.addPerson} removePerson={this.removePerson}/>
				</ LazyLoad>
				<LazyLoad height={500} once placeholder={<div/>} offset={[900, 0]} >
					<InstagramFeed />
				</ LazyLoad>
				<Kontakt wedding={false}/>
			</div>)} />
			</div>
			
		);
	}
}

  