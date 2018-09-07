import React, { Component } from 'react';
import './index.css';

import ReactPlayer from 'react-player'

export default class Photografie extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }
	
	render() {
        if(this.props.articles && this.props.articles.length >0)
		return (
			<div className="photografie">
                {this.props.articles.map((article, i)=>{
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
        else
        return (<div/>)
	}
}


