import React, { Component } from 'react';
// import Kontakt from '../Kontakt';
// import NavigationBar from '../NavigationBar';
// import Gallery from '../Gallery';
import About from '../About';
import Blog from '../Blog';
import Logo from '../Logo';
// import InstagramFeed from '../InstagramFeed';
// import { Route } from 'react-router';
import Ballroom from '../Ballroom';
import BallroomGallery from '../BallroomGallery';
// import NavigationBar from '../NavigationBar';
import NavigationBar from '../../MainComponents/NavigationBar';
import './index.css';
// import { Fullpage, Slide } from 'fullpage-react';
// import Reviews from '../Reviews';
// import ContactForm from '../ContactForm';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Kontakt from '../Kontakt';
import ContactForm from '../ContactForm';

const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;



// import {ScrollToTopOnMount, SectionsContainer, Section, Header, Footer} from 'react-fullpage';

const fullPageOptions = {
	// for mouse/wheel events
	// represents the level of force required to generate a slide change on non-mobile, 0 is default
	scrollSensitivity: 2,
  
	// for touchStart/touchEnd/mobile scrolling
	// represents the level of force required to generate a slide change on mobile, 0 is default
	touchSensitivity: 2,
	scrollSpeed: 500,
	resetSlides: true,
	hideScrollBars: false,
	enableArrowKeys: true,
  
	// optional, set the initial vertical slide
	activeSlide: 0
  };
  
  const topNavStyle = {
	textAlign: 'center',
	position: 'fixed',
	width: '100%',
	cursor: 'pointer',
	zIndex: 10,
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
	top: '0px'
  };
  
  const horizontalNavStyle = {
	position: 'absolute',
	width: '100%',
	top: '50%',
	zIndex: 10
  };
  
  const horizontalSliderProps = {
	name: 'horizontalSlider1',
	infinite: true
  };
  
  export default class Wedding extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		active: {
		  Fullpage: 0,
		  horizontalSlider1: 0
		}
	  };
  
	  this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
	  this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
	}
  
	onSlideChangeStart(name, props, state, newState) {
	  if (!this.horizontalNav) {
		this.horizontalNav = document.getElementById('horizontal-nav');
	  }
  
	  if (name === 'horizontalSlider1') {
		scrollNavStart(this.horizontalNav);
	  }
	}
  
	onSlideChangeEnd(name, props, state, newState) {
	  if (name === 'horizontalSlider1') {
		scrollNavEnd(this.horizontalNav);
	  }
  
	  const oldActive = this.state.active;
	  const sliderState = {
		[name]: newState.activeSlide
	  };
  
	  const updatedState = Object.assign(oldActive, sliderState);
	  this.setState(updatedState);
	}
  
	componentDidMount() {
  
	}
  
	render() {
	  const { active } = this.state;
  
	  const currentActive = active.Fullpage;
	  const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);
	  const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);
	  const goToTop = changeFullpageSlide.bind(null, 0);
  
	  const horizontalSliderName = horizontalSliderProps.name;
	  const horizontalActive = this.state.active[horizontalSliderName];
  
	  const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);
	  const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);
  // <div style={topNavStyle}>
		//   <span onClick={prevSlide}>
		// 	<button>Previous Slide</button>
		//   </span>
		//   <span onClick={goToTop}>
		// 	<button>Back to Top</button>
		//   </span>
		//   <span onClick={nextSlide}>
		// 	<button>Next Slide</button>
		//   </span>
		// </div>
	  const topNav = (
		
		<NavigationBar wedding={true} />
	  );
  
	  const horizontalNav = (
		<div id='horizontal-nav' style={horizontalNavStyle}>
		  <span onClick={prevHorizontalSlide}><button>PREV</button></span>
		  <span style={{position: 'absolute', right: '0px'}} onClick={nextHorizontalSlide}><button>Next</button></span>
		</div>
	  );
  
	  const horizontalSlides = [
		<Slide ><About /></Slide>,
		<Slide ><About /></Slide>,
		<Slide style={{backgroundColor: 'yellow'}}><p>Horizontal 2</p></Slide>,
		<Slide style={{backgroundColor: 'green'}}><p>Horizontal 3</p></Slide>
	  ];
	  horizontalSliderProps.slides = horizontalSlides;
  
	  const horizontalSlider = <HorizontalSlider id='horizontal-slider-1' style={{
			background: 'rgb(181,161,109)'
			// background: linear-gradient(90deg, rgba(181,161,109,1) 24%, rgba(185,167,103,1) 50%, rgba(171,151,96,1) 80%);
		}} {...horizontalSliderProps}>{horizontalNav}</HorizontalSlider>;
  
	  const verticalSlides = [
		<Slide >
		  <Logo />
		</Slide>,
		<Slide style={{
			height: '100vh'
		}}>
		  <Ballroom />
		</Slide>,
		// <Slide>
		// 	<Reviews />
		// </Slide>,
		<Slide>
			<Blog />
		</Slide>,
		<Slide>
			<ContactForm />
		</Slide>,
		
		
		// <Kontakt />
		// <Slide style={{
		// 	height: '75vh'
		// }}>
		// 	<BallroomGallery selected={1} />
		// </Slide>,
		// horizontalSlider,
		// <Slide style={{backgroundColor: 'pink'}}><p>Slide 3</p></Slide>
	  ];
	  fullPageOptions.slides = verticalSlides;
  
	  return (
			<div><Ballroom /></div>
		// <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
		//   {topNav}
		// </Fullpage>
	  );
	}
  }
  
  function scrollNavStart(nav) {
	// make the nav fixed when we start scrolling horizontally
	nav.style.position = 'fixed';
  }
  
  function scrollNavEnd(nav) {
	// make the nav absolute when scroll finishes
	nav.style.position = 'absolute';
  }
  
  

// export default class Wedding extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			selected: 1
// 		};
// 		this.changeSelected = this.changeSelected.bind(this)


// 	  }
// 	changeSelected(i){
// 		this.setState({selected: i})
// 	}
	
// 	fullPageOptions = {
// 		// for mouse/wheel events
// 		// represents the level of force required to generate a slide change on non-mobile, 10 is default
// 		scrollSensitivity: 7,

// 		// for touchStart/touchEnd/mobile scrolling
// 		// represents the level of force required to generate a slide change on mobile, 10 is default
// 		touchSensitivity: 7,
// 		scrollSpeed: 500,//500
// 		hideScrollBars: true,
// 		enableArrowKeys: true,
// 		slides : [
// 			<Slide><div><NavigationBar /><Logo/></div></Slide>,
// 			<Slide> <Ballroom changeSelected={(i)=>this.changeSelected(i)}/> </Slide>,
// 			<Slide> <BallroomGallery selected={1}/> </Slide>,
// 			<Slide><About /> </Slide>,
// 			<Slide><Reviews /></Slide>,
// 			<Slide><Blog /></Slide>,
		
// 			<HorizontalSlider {...this.horizontalSliderProps}></HorizontalSlider>
		
// 	]
// 	};
	
// 	 horizontalSliderProps = {
// 		name: 'horizontalSlider1', // name is required
// 		infinite: true, // enable infinite scrolling
// 		slides: [
// 			<Slide> <About /> </Slide>,
// 			<Slide> <About /> </Slide>
// 		]
// 	};
	
	
	
// 	render() {
// 		const horizontalSliderName = horizontalSliderProps.name;
//     	const horizontalActive = this.state.active[horizontalSliderName];
// 		const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);
//     	const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

// 		return (
// 			<div>

// 			<Fullpage {...this.fullPageOptions} />

// 			</div>
			
// 		);
// 	}
// }

  