import React, { Component } from 'react';


import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import './index.css';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
// import SupportTouch from 'docs/src/modules/components/SupportTouch';
// import ImageView from '../ImageView';

const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    // backgroundColor: '#FEA900',
  },
  slide2: {
    // backgroundColor: '#B3DC4A',
  },
  slide3: {
    // backgroundColor: '#6AC0FF',
  },
};
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
  
]

function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

export default class Showroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: -1,
      index: 0,
      photos: chunk(photos, 8)  
    };
    this.addReview = this.addReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);

  }
  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };
  addReview(){
      
  }
  
    
	render() {
    const width = this.state.width;
		return (
			<div id="Showroom" >
        
        <div className="section-header">Showroom</div>
        <div className="white-border"></div>

        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          {this.state.photos.map((page,i)=>{
            console.log(this.state.photos.indexOf(page))
            return <div key={"page"+i} style={Object.assign({}, styles.slide, styles.slide1)}>
                      <Measure  bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
                        {
                          ({measureRef}) => {
                            if (width < 1 ){
                              return <div ref={measureRef}></div>;
                            }
                            let columns = 3;
                            if (width >= 480){
                              columns = 4;
                            }
                            if (width >= 1024){
                              // columns = 6;
                            }
                            if (width >= 1824){
                              // columns = 5;
                            }
                            return <Gallery onClick={(e)=>{
                              console.log(e.target.src);
                              this.props.changeImageViewSelected(e.target.src);
                              console.log(document.getElementById('ImageViewContainer'))
                              if(document.getElementById('ImageViewContainer')) document.getElementById('ImageViewContainer').scrollIntoView({  behavior: 'smooth' });
                            }}  key={page[0].src} photos= {page} columns={columns} />
                          }
                        }
                      </Measure>
                    </div>
          })}
          {/* <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
              {
                ({measureRef}) => {
                  if (width < 1 ){
                    return <div ref={measureRef}></div>;
                  }
                  let columns = 3;
                  if (width >= 480){
                    columns = 4;
                  }
                  if (width >= 1024){
                    // columns = 6;
                  }
                  if (width >= 1824){
                    // columns = 5;
                  }
                  return <div ref={measureRef}><Gallery photos= {photos1} columns={columns} /></div>
                }
              }
            </Measure>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
              {
                ({measureRef}) => {
                  if (width < 1 ){
                    return <div ref={measureRef}></div>;
                  }
                  let columns = 3;
                  if (width >= 480){
                    columns = 4;
                  }
                  if (width >= 1024){
                    // columns = 6;
                  }
                  if (width >= 1824){
                    // columns = 5;
                  }
                  return <div ref={measureRef}><Gallery photos= {photos2} columns={columns} /></div>
                }
              }
            </Measure>
          </div> */}
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
        </SwipeableViews>
        

        <div className="pagination">

          <div style={this.state.index >0 ? {}:{visibility:"hidden"}} onClick={(e)=>this.handleChange(e,this.state.index-1)}>‹</div>
          <div className={this.state.index===0? "selected":""} onClick={(e)=>this.handleChange(e,0)}>1</div>
          <div className={this.state.index===1? "selected":""} onClick={(e)=>this.handleChange(e,1)}>2</div>
          <div className={this.state.index===2? "selected":""} onClick={(e)=>this.handleChange(e,2)}>3</div>
          <div className={this.state.index===3? "selected":""} onClick={(e)=>this.handleChange(e,3)}>4</div>
          <div className={this.state.index===4? "selected":""} onClick={(e)=>this.handleChange(e,4)}>5</div>
          <div onClick={(e)=>this.handleChange(e,this.state.index+1)}>›</div>

        </div>
			</div>
		);
	}
}

