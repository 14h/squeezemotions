import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import ScrollArea from 'react-scrollbar';
// import HorizontalScroll from 'react-scroll-horizontal';
import Scrollbar from 'react-smooth-scrollbar';
import SwipeableViews from 'react-swipeable-views';

import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

import './index.css';

const photos = [
    { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];
const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
function slideRenderer(params) {
    const { index, key } = params;
    
    if(photos[index%photos.length])
    return (
      <img src={photos[index%photos.length].src} key={key} alt="sasad"/> 
    );
    return (
        <div key={key}/> 
      );
      
}
export default class ImageView extends Component {
    constructor(props) {
		super(props);
		this.state = {
            index: 0,
            display: 'none',
            // dis:'block',
            imageViewSelected: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        };

        this.changeImageViewSelected = this.changeImageViewSelected.bind(this);

    }
    handleChangeIndex = index => {
        if(index<0){
            index = photos.length + index;
        }
        this.setState({
          index,
        });
    };
    
      
    changeImageViewSelected(newImageViewSelected){
        this.setState({imageViewSelected: newImageViewSelected});
	}

    
    
	render() {
        // if(this.props.show === 1 && this.state.index != this.props.index){
        //     this.handleChangeIndex(this.props.index)
        // }
		return (
            <div id="ImageViewContainer" style={{display: this.props.show ? ('block'):('none')}}>
                {this.state.imageViewSelected.length > 0 && <div id="ImageView" style={{height: '100vh'}}>
                    <span className="close" onClick={()=>{
                        // this.close()
                        this.props.switchOverlay();
                        // this.props.changeImageViewSelected('');
                        // console.log('closing', this.state)
                        
                    }}></span>

                    <img className="blurred-image" src={photos[this.state.index%photos.length].src} alt="asasf"/>
                    <div className="selected-image">
                    <VirtualizeSwipeableViews
                        index={this.state.index}
                        onChangeIndex={this.handleChangeIndex}
                        slideRenderer={slideRenderer}
                        />
                    </div>
                </div>
                }
                <div className="photos-slider">
                    {this.props.photos && this.props.photos.map((photo,i)=><img onClick={()=>{

                        this.changeImageViewSelected(photo.src)
                        this.setState({
                            index: i
                        })
                    }
                    }className={(photos[this.state.index%photos.length].src === photo.src )?("photos-slider-img selected"):("photos-slider-img")} src={photo.src} alt="asjfnaskjfn" key={"photpos"+ i }/>)}
                </div>
            </div>
		);
	}
}
