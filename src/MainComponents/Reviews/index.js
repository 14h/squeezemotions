import React, { Component } from 'react';
// import {Link} from 'react-router-dom';


import './index.css';

export default class Reviews extends Component {
    constructor(props) {
		super(props);
		this.state = {
            reviews:[
                {
                    name: "0Lorasdaem",
                    text: "Lorem Ipsum is simdaply dummy text of the printing and typesetting industry."
                },
                {
                    name: "1Lorefdsgm",
                    text: "Lorem Ipsum is siadmply dummy text of the printing and typesetting industry."
                },
                {
                    name: "2Loradsadem",
                    text: "Lorem Ipsum is gdsimply dummy text of the printing and typesetting industry."
                },
                {
                    name: "3Lorgfgem",
                    text: "Lorem Ipsasdum is simply dummy text of the printing and typesetting industry."
                },
                {
                    name: "4Loasdrem",
                    text: "Lorem Ipsugfdhm is simply dummy text of the printing and typesetting industry."
                }
            ],
            reviewName:'',
            reviewText:''
        };
        this.addReview = this.addReview.bind(this);

        this.deleteReview = this.deleteReview.bind(this);
        this.handleChangeReviewName = this.handleChangeReviewName.bind(this);
        this.handleChangeReviewText = this.handleChangeReviewText.bind(this);
    }
    addReview(){
        this.setState((prevState)=> {
            let tempReviews = prevState.reviews;
            tempReviews.push({
                name:prevState.reviewName,
                text:prevState.reviewText
            })
            return {
                    reviews: tempReviews,
                    reviewName:'',
                    reviewText:'',
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
	handleChangeReviewText(e){
        this.setState({reviewText:e.target.value})
    }
    handleChangeReviewName(e){
        this.setState({reviewName:e.target.value})
    }
	render() {
		return (
			<div id="Reviews" className="parallax">
                <div className="section-header">Was man über uns sagt</div>
                <div className="white-border" />
                
                <div className="reviews-list">

                    {this.state.reviews.length>0 && this.state.reviews.map((review)=><div key={review.text} className="review">
                                {this.props.admin &&<div onClick={this.deleteReview} className="delete-button"/>}
                                <h3>
                                {review.text}
                                </h3>
                                
                                <h4>{review.name}</h4>
                            </div>
                    )}
                    {this.props.admin &&<div className="review editor">
                        <div onClick={this.addReview} className="add-button"/>
                        {/* <h3> */}
                        <input placeholder="Reviewer" type="text" value={this.state.reviewName} onChange={this.handleChangeReviewName} />
                        <textarea placeholder="Review Text" maxLength="50" type="text" value={this.state.reviewText} onChange={this.handleChangeReviewText} onKeyUp={(e)=>{

                            e.target.style.height = "5px";
                            e.target.style.height = (e.target.scrollHeight)+"px";
                        }} />
                    </div>
                    }
                </div>
			</div>
		);
	}
}


