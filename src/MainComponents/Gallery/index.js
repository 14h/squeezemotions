import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { PhotoSwipeGallery } from 'react-photoswipe';
// import { PhotoSwipeGallery } from 'react-photoswipe-component'
import "../../node_modules/photoswipe/dist/photoswipe.css"
import "../../node_modules/photoswipe/dist/default-skin/default-skin.css"
import "../../node_modules/react-photoswipe-component/src/style.css"
import './index.css';

// const PHOTO_ITEMS = [
//     {
//         src: 'https://i.imgur.com/bccRhXM.jpg',
//         w: 800,
//         h: 394,
//         caption: "Test Cap"
//     },
    
// ];




export default class Gallery extends Component {
	state = {
		// images: this.importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/)),
    isOpen: false,
    images: [
      {
        src: './images/DSC04508-min.jpg',
        thumbnail: './images/DSC04508-min.jpg',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: './images/DSC04508-min.jpg',
        thumbnail: './images/DSC04508-min.jpg',
        w: 1200,
        h: 900,
        title: 'Image 2'
      },
      {
        src: './images/DSC04508-min.jpg',
        thumbnail: './images/DSC04508-min.jpg',
        w: 1200,
        h: 900,
        title: 'Image 3'
      },
      {
        src: './images/DSC04508-min.jpg',
        thumbnail: './images/DSC04508-min.jpg',
        w: 1200,
        h: 900,
        title: 'Image 4'
      }
    ],
    options: {
      closeOnScroll: false,
      shareButtons: [
        {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
        {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
      ],
      // Buttons/elements
      closeEl:true,
      captionEl: true,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: true,
      counterEl: true,
      arrowEl: true,
      preloaderEl: true,
    }
	};
	
	importAll(r) {
		let imagesArr = []
		let images = {};
		r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
		
		Object.keys(images).forEach((e)=>{
			let img = new Image();
			img.src= images[e];
			img.onload = ()=>{

				imagesArr.push({
					thumbnail: img.src,
					src: img.src,
					w: img.width,
					h: img.height,
					title: ''
				})
			}
		})

		return imagesArr;
		
	}
	
	
	

  getThumbnailContent = item => (
    <img src={item.thumbnail} width='200px' height='auto' alt=""/>
  );

  openPhotoSwipe = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { images, options, isOpen } = this.state;
    return (
			
      // <Document title="Gallery | ReactPhotoswipe" className="page-gallery">
        <div>

          <div className="page-header">
            <h1>Photoswipe gallery</h1>
          </div>
          <PhotoSwipeGallery
            items={images}
            options={options}
            thumbnailContent={this.getThumbnailContent}
            isOpen={isOpen}
            onClose={this.handleClose}
          />
          <button type="button" className="btn btn-primary" onClick={this.openPhotoSwipe}>
            Open
          </button>
          <div>
        {/* <PhotoSwipeGallery items={PHOTO_ITEMS} /> */}
        
        {/* Or you can try this */}
        
        {/* <PhotoSwipeGallery items={PHOTO_ITEMS}>
            Open Gallery
        </PhotoSwipeGallery> */}
      </div>
        </div>
      // </Document>
    );
  }
}


