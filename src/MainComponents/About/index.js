import React, { Component } from 'react';
// import TweenOne from 'rc-tween-one';


import './index.css';
// import jeels from '../media/01.jpg';
// import Larissa from '../media/01.png';
export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			newPersonName: '',
			newPersonDescription:'',
			newPersonCover: '',
			newPersonImageSrc: ''
		};
		this.updateNewPersonName = this.updateNewPersonName.bind(this);
		this.updateNewPersonDescription = this.updateNewPersonDescription.bind(this);
		this.updateNewPersonCover = this.updateNewPersonCover.bind(this);
		this.updateNewPersonImageSrc = this.updateNewPersonImageSrc.bind(this);
		this.addPerson = this.addPerson.bind(this);
		this.removePerson = this.removePerson.bind(this);
	}
	addPerson(){
        this.setState((prevState)=> {
            let tempPersons = prevState.persons;
            tempPersons.push({
				name: prevState.newPersonName,
				description: prevState.newPersonDescription,
				cover: prevState.newPersonCover,
				imageSrc: prevState.newPersonImageSrc
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
		// let reviewTempName = e.target.parentElement.children[2].innerHTML
		// let reviewTempText = e.target.parentElement.children[1].innerHTML

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
	updateNewPersonName(e){
		this.setState({
			newPersonName: e.target.value
		})
	}
	updateNewPersonDescription(e){
		this.setState({
			newPersonDescription: e.target.value
		})
	}
	updateNewPersonCover(e){
		this.setState({
			newPersonCover: e.target.value
		})
	}
	updateNewPersonImageSrc(e){
		this.setState({
			newPersonImageSrc: e.target.value
		})
	}
	render() {
		return (
			<div id="Main-About">
				<div className="section-header">Hinter den Kulissen</div>
				<div className="white-border" />
				<div className="persons">
					{this.state.persons && this.state.persons.map((person)=>{
						return <div className="person" key={person.cover}>
						
									<div className="person-image-cut">
									
										<div className="person-image">
										
											<img src={person.imageSrc} alt={person.name} key={person.name}/>	
										</div>
									</div>
									<div className="person-description">

										<h2>{person.name}</h2>
										<h3>{person.description}</h3>
										{this.props.admin &&<div className="person-delete-button" onClick={this.removePerson}/>}
									</div>
									<div className="person-cover">

										{person.cover}
									</div>

								</div>
					})}
					{this.props.admin &&	
						<div className="person">
							
							<div className="person-image-cut">
								<div className="person-image">
									<img src={this.state.newPersonImageSrc} alt={this.state.newPersonName}/>	
								</div>
							</div>
							<div className="person-description">
								<h2>{this.state.newPersonName}</h2>
								<h3>{this.state.newPersonDescription}</h3>
							</div>
							<div className="person-cover">
								{this.state.newPersonCover}
							</div>
						</div>
					}
					{this.props.admin &&
						<div className="person" style={{
							clipPath: 'circle(50%)',
							width: '450px',
							height: '450px',
							background: '#fff',
							textAlign: 'center'
						}}>
							<div className="person-add-button" onClick={this.addPerson}/>
							<input className="person-input name-input" placeholder="Name" type="text" value={this.state.newPersonName} onChange={this.updateNewPersonName} />
							<input className="person-input description-input" placeholder="Description" type="text" value={this.state.newPersonDescription} onChange={this.updateNewPersonDescription} />
							<input className="person-input imagesrc-input" placeholder="Image Source" type="text" value={this.state.newPersonImageSrc} onChange={this.updateNewPersonImageSrc} />
							<textarea className=" person-input cover-input" placeholder="Cover" type="text" value={this.state.newPersonCover} onChange={this.updateNewPersonCover} />
						</div>
					}
				</div>
			</div>
		);
	}
}


