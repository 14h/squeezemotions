import React, { Component } from 'react';

export default class SQZM extends Component {
    constructor(props) {
      super(props);
      this.state = {
        indexProducers:0,


      };
    }
    render() {
        if (this.props.Producers && this.props.Producers.length>0 )
        return (
            <div id="SQZM" >
                
                {this.props.Producers && this.props.Producers.map((currentProducer,i) =>{
                    return <div  key={ i + "wrapper"} className={"producer-wrapper"} style={{background:"transparent", marginBottom:"6vh"}}>
                    <div key={i+"prod"}  className="producer-box "  style={{background:"#f5f5f9"}}>
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