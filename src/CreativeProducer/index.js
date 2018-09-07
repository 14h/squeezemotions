import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import ReactRevealText from 'react-reveal-text';

import './index.css';


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));






export default class CreativeProducer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        indexProducers:0,
        show: false

      };
      this.slideRenderer = this.slideRenderer.bind(this)  
      this.handleChangeIndex = this.handleChangeIndex.bind(this)  
    }
    slideRenderer(params) {
    
        const { index, key } = params;
        let currentProducer = this.props.Producers[index%this.props.Producers.length];
        if(currentProducer)
        return (
            <div  key={key + "wrapper"} className={"producer-wrapper"} style={{background:"transparent"}}>
                <div key={key}  className="producer-box "  style={{background:"#eee"}}>
                    <div className="producer-side producer-left-side">
                        <img src={currentProducer.imageSRC} width="100%" height="100%" alt={currentProducer.name}/>
                    </div>
    
                    <div className="producer-side producer-right-side">
                        <div className="producer-name" style={{
                            borderBottom: "solid 1px "+ currentProducer.themeColor
                        }}>
                            {currentProducer.name}
                        </div>
                        <div className="producer-text"  style={{
                            // color: currentProducer.themeColor
                        }}>

                            
                            {currentProducer.text}
                        </div>
                    </div>
                
                </div>
            </div>
    
    
        );
        return (
            <div key={key}/> 
          );
    }
    handleChangeIndex = indexProducers => {
        // document.body.style.background = this.props.Producers[indexProducers].themeColor
      if(indexProducers<0){
        indexProducers = this.props.Producers.length + indexProducers;
      }
      this.setState({
        indexProducers,
      });
    };
    componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 1000);
    }
    
    render() {
        const textStyles = {
            color: '#000',
            fontSize: '24px',
            lineHeight: '36px',
            // fontFamily: "Poiret One",
            textAlign: 'center',
            letterSpacing: '1em',
            paddingLeft: '1em', // to compensate for letter spacing
        };
        if (this.props.Producers && this.props.Producers.length>0 )
        return (
            <div id="CreativeProducer" >

                <ReactRevealText show={this.state.show} text="WELCOME TO THE FUTURE" style={textStyles}/>
                <div className="cp-pagination">
                    {/* <div style={this.state.indexProducers >0 ? {}:{visibility:"hidden"}} onClick={(e)=>this.handleChangeIndex(this.state.indexProducers-1)}>‹</div> */}
                    {/* <div style={this.state.indexProducers <Producers.length-1 ? {}:{visibility:"hidden"}} onClick={(e)=>this.handleChangeIndex(this.state.indexProducers+1)}>›</div> */}
                    { this.props.Producers.map((page,i)=>{
                    return <div key={"Producers"+i} className={this.state.indexProducers===i? "selected":""} onClick={(e)=>this.handleChangeIndex(i)}>{page.thing}</div>
                    })}
                    
                </div>
                
                <div className={"producer-wrapper-background"} style={{
                    background: this.props.Producers[this.state.indexProducers%this.props.Producers.length].themeColor,
                    transition: "background-color 0.5s ease"
                }}>
                    <VirtualizeSwipeableViews
                        index={this.state.indexProducers}
                        onChangeIndex={this.handleChangeIndex}
                        slideRenderer={this.slideRenderer}
                        />
                </div>
            </div>

        );
        else
        return (<div/>)
      }
  }
  
  