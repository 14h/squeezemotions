import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';

import Content4 from './Content4';
import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';
import Footer from './Footer';
import Point from './Point';
import Kontakt from '../Kontakt';
import NavigationBar from '../NavigationBar';
// import Gallery from '../Gallery';
import About from '../About';
import Blog from '../Blog';
import Logo from '../Logo';
// import InstagramFeed from '../InstagramFeed';
import { Route } from 'react-router';
import Reviews from '../Reviews';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !window.location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (window.location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        }, () => {
          // 实现整屏滚动
          const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
          scrollScreen.init({ docHeight });
        });
      }, 500);
    } 
    else {
      // 实现整屏滚动
      const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      scrollScreen.init({ docHeight });
    }
  }

  render() {
    const children = [
      // <Content4 id="content_5_0" key="content_5_0" isMobile={this.state.isMobile}/>,
      // <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>,
      
      <Content0 className="content0" id="content_0_0" key="content_0_0" isMobile={this.state.isMobile}/>,
      <Content1 id="content_7_0" key="content_7_0" isMobile={this.state.isMobile}/>,
      // <Content2 id="content_8_0" key="content_8_0" isMobile={this.state.isMobile}/>,
      // <Content3 id="content_4_0" key="content_4_0" isMobile={this.state.isMobile}/>,
      // <Content5 id="content_6_0" key="content_6_0" isMobile={this.state.isMobile}/>,
      // <Content6 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>,
      // <Content7 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile}/>,
      // <Content8 id="content_9_0" key="content_9_0" isMobile={this.state.isMobile}/>,
      // <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>,
      // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" ref="list" data={['content_0_0', 'content_7_0', 'content_8_0', 'content_4_0', 'content_5_0', 'content_6_0', 'content_3_0', 'content_2_0', 'content_9_0']} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
