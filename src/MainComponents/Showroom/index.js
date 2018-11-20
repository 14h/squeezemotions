import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

import './index.css';


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

// function slideRenderer(params) {
//     const { index, key } = params;
//     if(photos[index%photos.length])
//     return (
//       <img src={photos[index%photos.length].src} key={key} alt="sasad"/> 
//     );
//     return (
//         <div key={key}/> 
//       );
// }

// const photos = [
//   { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
//   { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
//   { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
//   { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
//   { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
//   { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
//   { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
//   { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
//   { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
  
// ]

// function chunk (arr, len) {
//   var chunks = [],
//       i = 0,
//       n = arr.length;
//   while (i < n) {
//     chunks.push(arr.slice(i, i += len));
//   }
//   return chunks;
// }

function findWithAttr(array, attr, value) {

  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
}

export default class Showroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: -1,
      index: 0,
      // photos: chunk(photos, 8)  ,
      showOverlay: 0,
      indexOverlay:0,
      imageViewSelected: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    };
    this.addReview = this.addReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.switchOverlay = this.switchOverlay.bind(this);
    this.changeImageViewSelected = this.changeImageViewSelected.bind(this);
    this.slideRenderer = this.slideRenderer.bind(this);

  }
  slideRenderer(params) {
    const { index, key } = params;
    if(this.props.showroomPhotosSet[index%this.props.showroomPhotosSet.length])
    return (
      <img src={this.props.showroomPhotosSet[index%this.props.showroomPhotosSet.length].src} key={key} alt="sasad"/> 
    );
    return (
        <div key={key}/> 
      );
  }
  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  // handleChangeIndex = indexOverlay => {
  //   this.setState({
  //     indexOverlay,
  //   });
  // };
  addReview(){
      
  }
  componentDidMount(){

  }
  switchOverlay(i){

    if(this.state.showOverlay === 1){
      this.setState({showOverlay: 0})
    }else{
      this.setState({
        showOverlay: 1,
        indexOverlay : i
      })
    }
  }
  handleChangeIndex = indexOverlay => {
    if(indexOverlay<0){
      indexOverlay = this.props.showroomPhotosSet.length + indexOverlay;
    }
    this.setState({
      indexOverlay,
    });
    // console.log(index)
  };

    
  changeImageViewSelected(newImageViewSelected){
      this.setState({imageViewSelected: newImageViewSelected});

  }
  
    
	render() {
    const width = this.state.width;
    if(this.props.photos && this.props.photos.length > 0)
		return (
			<div id="Showroom" >
        
        <div className="section-header">Showroom</div>
        <div className="white-border"></div>

        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} enableMouseEvents>

          {this.props.photos.map((page,i)=>{
            return <div className="Gallery" key={"page"+i} >
                      <Measure  bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
                        {
                          ({measureRef}) => {
                            if (width < 1 ){
                              return <div ref={measureRef}></div>;
                            }
                            let columns = 3;
                            if (width >= 680){
                              columns = 4;
                            }
                            if (width >= 1024){
                              // columns = 6;
                            }
                            if (width >= 1824){
                              // columns = 5;
                            }
                            return <Gallery 
                                      
                                      onClick={(e)=>{
                                        // document.body.classList.add('no-scroll');
                                        document.body.style.overflow="hidden";
                                        if(document.getElementById('Showroom'))

                                        // console.log(document.getElementById('Showroom').scrollTop + document.getElementById('Showroom').getBoundingClientRect().top ) 
                                        // window.onscroll = function () { window.scrollTo(0, document.getElementById('Showroom').scrollTop + document.getElementById('Showroom').getBoundingClientRect().top); };
                                        this.switchOverlay(findWithAttr(this.props.showroomPhotosSet, 'src',e.target.src));
                                      }}
                                      key={page[0].src} 
                                      photos= {page} 
                                      columns={columns} 
                                    />
                          }
                        }
                      </Measure>
                    </div>
          })}
         
        </SwipeableViews>
        <div className="pagination">
          <div style={this.state.index >0 ? {}:{visibility:"hidden"}} onClick={(e)=>this.handleChange(e,this.state.index-1)}>‹</div>
          {this.props.photos.map((page,i)=>{
            return <div key={"photos"+i} className={this.state.index===i? "selected":""} onClick={(e)=>this.handleChange(e,i)}>{i+1}</div>
          })}
          <div style={this.state.index <this.props.photos.length-1 ? {}:{visibility:"hidden"}} onClick={(e)=>this.handleChange(e,this.state.index+1)}>›</div>
        </div>


        <div id="ImageViewContainer" style={{display: this.state.showOverlay ? ('block'):('none')}}>
                {this.state.imageViewSelected.length > 0 && <div id="ImageView" style={{height: '100vh'}}>
                    <span className="close-button" onClick={()=>{
                        this.switchOverlay();
                        // document.body.classList.remove('no-scroll');
                        document.body.style.overflow="auto";
                    }}></span>

                    <img className="blurred-image" src={this.props.showroomPhotosSet[this.state.indexOverlay%this.props.showroomPhotosSet.length].src} alt="asasf"/>
                    <div className="selected-image">
                    <VirtualizeSwipeableViews
                        index={this.state.indexOverlay}
                        onChangeIndex={this.handleChangeIndex}
                        slideRenderer={this.slideRenderer}
                        enableMouseEvents
                        />
                    </div>
                </div>
                }
                <div className="photos-slider">
                    {this.props.showroomPhotosSet && this.props.showroomPhotosSet.map((photo,i)=><img onClick={()=>{

                        this.changeImageViewSelected(photo.src)
                        this.setState({
                          indexOverlay: i
                        })
                    }
                    }className={(this.props.showroomPhotosSet[this.state.indexOverlay%this.props.showroomPhotosSet.length].src === photo.src )?("photos-slider-img selected"):("photos-slider-img")} src={photo.src} alt="asjfnaskjfn" key={"photpos"+ i }/>)}
                </div>
            </div>
			</div>
    );
    else 
    return(<div/>)
	}
}

