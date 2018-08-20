import React, { Component } from 'react';
import './index.css';
// import YouTube from 'react-youtube';
// import Vimeo from 'react-vimeo';
import ReactPlayer from 'react-player'

export default class Photografie extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }
    // _onReady(event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }
	
	render() {
        
		return (
			<div className="photografie">
                {this.props.articles && this.props.articles.map((article, i)=>{
                    // if(article.youtubeId)
                    // return< div className={i%2 ? ("article "):("article reversed")} key={"article "+i}>
                    //             <div className="article-side video" >
                    //                 <YouTube
                    //                     videoId={article.youtubeId}
                    //                     opts={
                    //                         {
                    //                             height: '400px',
                    //                             width: '100%',
                    //                             playerVars: { // https://developers.google.com/youtube/player_parameters
                    //                               autoplay: 0,
                    //                               color: 'white',
                    //                               controls:1,
                    //                               iv_load_policy: 3,
                    //                               modestbranding:1,
                    //                               showinfo:0
                    //                             }
                    //                         }
                    //                     }
                    //                     // onReady={this._onReady}
                    //                 />
                    //             </div>
                    //             <div className="article-side video-side">
                    //                 <div className="article-name">
                    //                     {article.name}
                    //                 </div>
                    //                 <div className="article-body">
                    //                     {article.body}
                    //                 </div>
                    //             </div>
                    //         </div>
                    if(article.videoLink)
                    return< div className={i%2 ? ("article "):("article reversed")} key={"article "+i}>
                                <div className="video-side" >
                                    {/* <Vimeo videoId={ article.vimeoId } />, */}
                                    <ReactPlayer url={article.videoLink} height={"calc(100vw / 2)"} style={{
                                        maxWidth: '100vw',
                                        maxHeight: '360px'
                                    }} />
                                </div>
                                <div className="video-side">
                                    <div className="article-name">
                                        {article.name}
                                    </div>
                                    <div className="article-body">
                                        {article.body}
                                    </div>
                                </div>
                            </div>
                    else
                    return <div className={i%2 ? ("article "):("article reversed")} key={"article "+i}>
                                <div className="article-side article-image" >
                                    <img src={article.imageSRC} alt={article.name}/>
                                </div>
                                <div className="article-side">
                                    <div className="article-name">
                                        {article.name}
                                    </div>
                                    <div className="article-body">
                                        {article.body}
                                    </div>
                                </div>
                           </div>
                })}
				
			</div>
		);
	}
}


