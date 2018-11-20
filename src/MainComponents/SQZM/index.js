import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';


export default class SQZM extends Component {
    constructor(props) {
      super(props);
      this.state = {
        indexProducers:0,
        show: false

      };
    }
    
    componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 1000);
    }
    
    render() {
        const textStyles = {
            color: '#314659',
            marginTop: '50px',
            fontSize: '24px',
            lineHeight: '36px',
            textAlign: 'center',
            letterSpacing: '1em',
            paddingLeft: '1em', // to compensate for letter spacing
        };
        if (this.props.Producers && this.props.Producers.length>0 )
        return (
            <div id="SQZM" >
                <ReactRevealText show={this.state.show} text="WELCOME TO THE FUTURE" style={textStyles}/>
                {this.props.Producers && this.props.Producers.map((currentProducer,i) =>{
                    return <div  key={ i + "wrapper"} className={"producer-wrapper"} style={{background:"transparent", marginBottom:"6vh"}}>
                    <div key={i+"prod"}  className="producer-box "  style={{background:"#eee"}}>
                        <div className="producer-side producer-left-side">
                            <img src={currentProducer.imageSRC} width="100%" height="100%" alt={currentProducer.name}/>
                        </div>
        
                        <div className="producer-side producer-right-side">
                            <div className="producer-name" style={{
                                borderBottom: "solid 1px "+ currentProducer.themeColor
                            }}>
                                {currentProducer.name}
                            </div>
                            <div className="producer-text">
                                {currentProducer.text}
                            </div>
                        </div>
                    
                    </div>
                </div>
                })}
            </div>
        );
        else
        return (<div/>)
      }
  }