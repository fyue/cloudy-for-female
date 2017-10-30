import React from 'react';
import classnames from 'classnames';
import css from './index.less';

import hander from './images/hander.png';
import topHeader from './images/topHeader.png';
import cbl from './images/contentBodyLeft.png';
import cbr from './images/contentBodyRight.png';

//stars
import s1 from './images/stars/s1.png';
import s2 from './images/stars/s2.png';
import s3 from './images/stars/s3.png';
import s4 from './images/stars/s4.png';

//stars' details
import d0 from './images/stars/d1.png';
import d1 from './images/stars/d2.png';
import d2 from './images/stars/d3.png';
import d3 from './images/stars/d4.png';

//videos
/*import v0 from './mp4/1.mov';
import v1 from './mp4/2.mp4';
import v2 from './mp4/3.mp4';
import v3 from './mp4/4.mov';
import v4 from './mp4/5.mp4';
import v5 from './mp4/6.mov';*/

const details = [d0, d1, d2, d3];

const videos = [
  '//vrbuy.image.alimmdn.com/cloudrack/oiwas/1.mp4',
  '//vrbuy.image.alimmdn.com/cloudrack/oiwas/2.mp4',
  '//vrbuy.image.alimmdn.com/cloudrack/oiwas/3.mp4',
  '//vrbuy.image.alimmdn.com/cloudrack/oiwas/4.mp4',
  '//vrbuy.image.alimmdn.com/cloudrack/oiwas/5.mp4',
  '//vrbuy.image.alimmdn.com/cloudrack/oiwas/6.mp4',
];

export default class Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dIndex: 0,
      vIndex: 0,
    };
    this.play = this.play.bind(this);
    this.switchStars = this.switchStars.bind(this);
    this.switchVideo = this.switchVideo.bind(this);
  }

  switchVideo() {
    this.setState((preState) => {
      let currentVideo = preState.vIndex;
      preState.vIndex = currentVideo < 5 ? currentVideo + 1 : 0;
    });
  }

  switchStars(idx, speed) {
    this.mySwiper.slideTo(idx, speed, false);
  }

  play() {
    this.autoPlay = setInterval(() => {
      this.setState((preState) => {
        let currentIdx = preState.dIndex;
        preState.dIndex = currentIdx < 3 ? currentIdx + 1 : 0;
      });
    }, 3000);
  }

  componentDidUpdate() {
    this.switchStars(this.state.dIndex, 1000);
  }

  componentDidMount() {
    this.mySwiper = new Swiper('.swiper-container', {
      initialSlide: 0,
      onlyExternal: true,
      effect: 'cube',
      cube: {},
    });
    this.play();
  }

  componentWillUnmount() {
    this.mySwiper = null;
    clearInterval(this.autoPlay);
  }

  render() {
    let {dIndex, vIndex} = this.state;
    let picSrc = details[dIndex];
    let videoSrc = videos[vIndex];

    const swiperStyle = classnames([css.playWrapper, 'swiper-container']);
    const swiperSlide = classnames([css.playSlide, 'swiper-slide']);
    const screen = classnames([css.screen]);
    return (
      <div className={screen}>
        <img src={hander} className={css.hander} />
        <img className={css.topHeader} src={topHeader}/>
        <div className={css.content}>
          <div className={css.contentVideo}>
            <video src={videoSrc} autoPlay onEnded={this.switchVideo} />
          </div>
          <div className={css.contentBody}>
            <img src={cbl}/>
            <div className={css.contentBodyRight}>
              <img src={cbr}/>
              <div className={css.enterButton} onTouchEnd={() => this.props.go('main')}/>
            </div>
          </div>
          <div className={css.contentFooter}>
            <img src={picSrc}/>
            <div className={swiperStyle}>
              <div className="swiper-wrapper">
                <div className={swiperSlide} style={{backgroundImage: 'url(' + s1 + ')'}}/>
                <div className={swiperSlide} style={{backgroundImage: 'url(' + s2 + ')'}}/>
                <div className={swiperSlide} style={{backgroundImage: 'url(' + s3 + ')'}}/>
                <div className={swiperSlide} style={{backgroundImage: 'url(' + s4 + ')'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
