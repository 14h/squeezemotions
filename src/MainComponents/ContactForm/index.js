import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import * as $ from 'jquery';



import './index.css';

export default class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phoneNumber: "",
			message:"",
			submitSuccess: false,
			submitError: false
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.contactFormSubmitted = this.contactFormSubmitted.bind(this);
		
	}
	componentDidMount(){
	}
	contactFormSubmitted(e){
		// e.preventDefault();
		console.log("form submitted", this.state);
		let resetSubmit = ()=>{
			this.setState({
				submitSuccess: false,
				submitError: false
			})
		}
		let successFunction = ()=>{
			console.log("double success")
			this.setState({
				submitSuccess: true
			})
			setTimeout(function(){
				resetSubmit();
			},5000)
		}
		let errorFunction = ()=>{
			console.log("double error")
			
			this.setState({
				submitError: true
			})
			document.getElementById('error-message').classList.toggle('closed')
			setTimeout(function(){
				resetSubmit();
			},5000)
		}
		$.ajax({
			url: "https://formspree.io/abdallah.kawji@outlook.com", 
			method: "POST",
			data: {
				Name: this.state.name,
				Email: this.state.email,
				PhoneNumber: this.state.phoneNumber,
				message: this.state.message
			},
			dataType: "json"
		}).done(function() {
			successFunction()
			
			console.log("success")
		  }).fail(function(err){
			  console.log(err)
			  console.log("error Try again!")
			  errorFunction();
		  });
		
	}
	handleNameChange(e){
		this.setState({name:e.target.value})
	}
	handleEmailChange(e){
		this.setState({email:e.target.value})
	}
	handlePhoneNumberChange(e){
		this.setState({phoneNumber:e.target.value})
	}
	handleMessageChange(e){
		this.setState({message:e.target.value})
	}
	render() {
		return (
			<div id="ContactForm">

                <h1>NOCH FRAGEN?</h1>
                <h2>Melde dich einfach bei uns.</h2>
				<div className="form-grid">
					<div className="form form-grid-element">
					<form className="form-container" >
						<div className="form-line success">
							<label className="top">Deine Name:</label>
							<input type="text" className="form-input" onChange={(e)=>this.handleNameChange(e)} required/>
							
							<div className="check-label"></div>
						</div>
						
						<div className="form-line">
							<label>Deine Email-Adresse:</label>
							<input type="text" className="form-input" onChange={(e)=>this.handleEmailChange(e)} required/>
							
							<div className="check-label"></div>
						</div>
						<div className="form-line">
							<label>Deine Telefonnummer:</label>
							<input type="text" className="form-input"  onChange={(e)=>this.handlePhoneNumberChange(e)}  required/>
							
							<div className="check-label"></div>
						</div>
						<div className="form-line">
							<label>Message:</label>
							<textarea className="form-input"  onChange={(e)=>this.handleMessageChange(e)}  required></textarea>
							
							<div className="check-label"></div>

						</div>
						<div className="submit-button-wrapper">
							<input type="button" className="form-button" value="Submit" onClick={this.contactFormSubmitted}/>
							{this.state.submitSuccess &&<h4>Success</h4>}
							{this.state.submitError &&<h6 className="slider closed" id="error-message">Error, please fill in all inputs and resubmit!</h6>}
						</div>
					</form>
					</div>




					<div className="info form-grid-element">
						<div className="top">
							<h2>Grafenhof 8, 44137 Dortmund, Deutschland</h2>
							<h2>giveme@squeezemotions.com</h2>
							<h2>+49 151-2408-5757</h2>
						</div>
						<div className="bottom">
							<h3>Datenschutz</h3>
							<p>
								Disclaimer - rechtliche Hinweise
								
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


