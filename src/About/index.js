import React, { Component } from 'react';


import './index.css';
// import jeels from '../media/01.jpg';
// import Larissa from '../media/01.png';
export default class About extends Component {
	
	render() {
		return (
			<div id="About">
				<h1>Hinter den Kulissen</h1>
				
			<div className="persons">
				<div className="person">
				 	<div className="person-image-cut">
					<div className="person-image">
						<img src='./images/01.jpg' alt="jeels"/>	
					</div>
					</div>
					<div className="person-description">
						<h2>Jeelz</h2>
						<h3>Video & Produktion</h3>
					</div>
					<div className="person-cover">
						Jeels ist unser Allrounder. Ob Foto oder Video, beides fasziniert ihn. Es fing an mit einigen Urlaubs- und Hochzeitsvideos bis schließlich die Entscheidung fiel, alles auf professionellere Beine zu stellen. Squeezemotions war geboren.	
					</div>
				</div>
				<div className="person">
				<div className="person-image-cut">
					<div className="person-image">
						<img src='./images/02.png' alt="Larissa"/>
						</div>
					</div>
					<div className="person-description">
						<h2>Larissa</h2>
						<h3>Fotografie</h3>
					</div>
					<div className="person-cover">
					Ihr wollt kreative Fotografie? Larissa ist sprichwörtlich für jedes Abenteuer zu haben. Sie fotografiert von Afrika über Island bis nach Zürich alles was ihr vor die Linse kommt. Und das mit atemberaubenden Ergebnissen. Überzeugt Euch selbst!
					</div>
				</div>

			</div>	
			</div>
		);
	}
}


