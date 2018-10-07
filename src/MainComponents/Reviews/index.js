import React, { Component } from 'react';
import './index.css';
// import {Link} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


import Carousel from 'nuka-carousel';
import Measure from 'react-measure';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



export default class Reviews extends Component {
    constructor(props) {
		super(props);
		this.state = {
            reviewName:'',
            reviewText:'',
            reviewInstagramLink:'',
            width: -1,
        };
        this.handleChangeReviewName = this.handleChangeReviewName.bind(this);
        this.handleChangeReviewText = this.handleChangeReviewText.bind(this);
        this.handleChangeReviewInstagramLink = this.handleChangeReviewInstagramLink.bind(this);
    }
	handleChangeReviewText(e){
        this.setState({reviewText:e.target.value})
    }
    handleChangeReviewName(e){
        this.setState({reviewName:e.target.value})
    }
    handleChangeReviewInstagramLink(e){
        this.setState({reviewInstagramLink:e.target.value})
    }
	render() {
        function chunk (arr, len) {

            var chunks = [],
                i = 0,
                n = arr.length;
          
            while (i < n) {
              chunks.push(arr.slice(i, i += len));
            }
          
            return chunks;
          }
        let reviewsChunks = chunk(this.props.reviews,3);
        let width = this.state.width;
		return (
			<div className={this.props.wedding? ("parallax Reviews wedding"):("parallax Reviews ")}>
                <div className="section-header">Was man über uns sagt</div>
                <div className="white-border" />
                

                <Measure  bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
          {
            ({measureRef}) => {
              if (width < 1 ){
                return <div ref={measureRef}></div>;
              }
              let columns = 1;
              if (width >= 680){
                columns = 2;
              }
              if (width >= 1024){
                columns = 3;
              }
              if (width >= 1824){
                // columns = 5;
              }
              if(this.props.reviews.length>0)
              return <Carousel 
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
              heightMode="first"
              slidesToShow={columns}
              wrapAround={false}
              cellSpacing={ 10 }
              autoplay={true}
              autoplayInterval={2000}
              pauseOnHover={false}
              vertical={false}
              withoutControls={false}
            >
                <div style={{height: "200px"}}></div>
            {/* {reviewsChunks.map((reviewsChunk,i)=><div className="reviews-list" key={"review"+i}> */}
                        { this.props.reviews.map((review)=><div key={review.text} className="review">
                                    {this.props.admin &&<div onClick={this.props.deleteReview} className="delete-button"/>}
                                    <h3>
                                    {review.text}
                                    </h3>
                                    <div className="review-name">
                                        {review.instagramLink && <a href={review.instagramLink} target='_blank'>
                                            <svg width="30px" height="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style={{'enableBackground':'new 0 0 512 512'}}>
                                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-46.0041" y1="634.1208" x2="-32.9334" y2="647.1917" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <path style={{fill:'url(#SVGID_1_)'}} d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192
                                                    c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112
                                                    V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/>
                                                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-42.2971" y1="637.8279" x2="-36.6404" y2="643.4846" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <path style={{fill:'url(#SVGID_2_)'}} d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128
                                                    S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80
                                                    C336,300.096,300.096,336,256,336z"/>
                                                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.5456" y1="644.5793" x2="-34.7919" y2="645.3331" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <circle style={{fill:'url(#SVGID_3_)'}} cx="393.6" cy="118.4" r="17.056"/>
                                            </svg>
                                        </a>}
                                        {!review.instagramLink &&<div/>}
                                        <div className="review-name-text">{review.name}</div>
                                    </div>
                                </div>
                        )}
                    {/* </div>)} */}
            </Carousel>

            else return <div/>
             }
            }
          </Measure>
                
                {/* <AutoPlaySwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} enableMouseEvents>

                    {reviewsChunks.map((reviewsChunk,i)=><div className="reviews-list" key={"review"+i}>
                        {reviewsChunk.length>0 && reviewsChunk.map((review)=><div key={review.text} className="review">
                                    {this.props.admin &&<div onClick={this.props.deleteReview} className="delete-button"/>}
                                    <h3>
                                    {review.text}
                                    </h3>
                                    <div className="review-name">
                                        {review.instagramLink && <a href={review.instagramLink} target='_blank'>
                                            <svg width="30px" height="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style={{'enableBackground':'new 0 0 512 512'}}>
                                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-46.0041" y1="634.1208" x2="-32.9334" y2="647.1917" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <path style={{fill:'url(#SVGID_1_)'}} d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192
                                                    c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112
                                                    V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/>
                                                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-42.2971" y1="637.8279" x2="-36.6404" y2="643.4846" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <path style={{fill:'url(#SVGID_2_)'}} d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128
                                                    S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80
                                                    C336,300.096,300.096,336,256,336z"/>
                                                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.5456" y1="644.5793" x2="-34.7919" y2="645.3331" gradientTransform="matrix(32 0 0 -32 1519 20757)">
                                                    <stop  offset="0" style={{stopColor:'#FFC107'}}/>
                                                    <stop  offset="0.507" style={{stopColor:'#F44336'}}/>
                                                    <stop  offset="0.99" style={{stopColor:'#9C27B0'}}/>
                                                </linearGradient>
                                                <circle style={{fill:'url(#SVGID_3_)'}} cx="393.6" cy="118.4" r="17.056"/>
                                            </svg>
                                        </a>}
                                        {!review.instagramLink &&<div/>}
                                        <div className="review-name-text">{review.name}</div>
                                    </div>
                                </div>
                        )}
                    </div>)}
                    
                </AutoPlaySwipeableViews> */}
                
                {this.props.admin &&<div className="review editor">
                        <div onClick={()=>this.props.addReview(this.state)} className="add-button"/>
                        {/* <h3> */}
                        <input placeholder="Reviewer" type="text" value={this.state.reviewName} onChange={this.handleChangeReviewName} />
                        <input placeholder="Instagram Link" type="text" value={this.state.reviewInstagramLink} onChange={this.handleChangeReviewInstagramLink} />
                        <textarea placeholder="Review Text" maxLength="50" type="text" value={this.state.reviewText} onChange={this.handleChangeReviewText} onKeyUp={(e)=>{

                            e.target.style.height = "5px";
                            e.target.style.height = (e.target.scrollHeight)+"px";
                        }} />
                    </div>
                }
			</div>
		);
	}
}


