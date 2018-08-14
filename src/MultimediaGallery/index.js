import React from 'react';
import Gallery from 'react-multimedia-gallery';
// import Lightbox from 'react-images-texts-videos';

export default class MultimediaGallery extends React.Component {
    render() {
	return (
	    <Gallery items={ITEMS_SET} onClickItem={this.openLightbox} />
	);
    }
}
const ARTICLE_SET = [
   {
     type:'article',
     content:'Text1...',
   },
   {
     type:'article',
     content:'Text2...',
   },
   {
     type:'article',
     content:'Text3...',
   },
]
const PHOTO_SET = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    srcset: [
      'https://source.unsplash.com/2ShvY8Lf6l0/800x599 1024w',
      'https://source.unsplash.com/2ShvY8Lf6l0/800x599 800w',
      'https://source.unsplash.com/2ShvY8Lf6l0/800x599 500w',
      'https://source.unsplash.com/2ShvY8Lf6l0/800x599 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 800,
    height: 599,
    alt: 'image 1',
    type: 'photo',
  },
  {
    src: 'http://example.com/example/img2.jpg',
    srcset: [
      'http://example.com/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2',
  }
];
const VIDEO_SET = [
  {
    src: 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg',
    srcset: [
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg 1024w',
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/sddefault.jpg 800w',
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg 500w',
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    content: 'youtubeId1',
    type: 'video',
  },
  {
    src: 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg',
    srcset: [
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg 1024w',
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/sddefault.jpg 800w',
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg 500w',
      'https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    content: 'youtubeId2',
    type: 'video',
  }
];

const ITEMS_SET = PHOTO_SET.concat(VIDEO_SET.concat(ARTICLE_SET));