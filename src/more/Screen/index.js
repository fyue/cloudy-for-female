import React from 'react';
import classnames from 'classnames';
import css from './index.less';

import testVideo from './mp4/test.mp4';

import hander from './images/hander.png';
import topHeader from './images/topHeader.png';
import cbl from './images/contentBodyLeft.png';
import cbr from './images/contentBodyRight.png';
import cfl from './images/contentFooterLeft.png';
import cfr from './images/contentFooterRight.png';

//stars
import s1 from './images/stars/s1.png';
import s2 from './images/stars/s2.png';
import s3 from './images/stars/s3.png';
import s4 from './images/stars/s4.png';

//stars' details
import d1 from './images/stars/d1.png';
import d2 from './images/stars/d2.png';
import d3 from './images/stars/d3.png';
import d4 from './images/stars/d4.png';

const details = [d1, d2, d3, d4];

export default class Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dIndex: 0,
    };
    this.play = this.play.bind(this);
    this.switchStars = this.switchStars.bind(this);
  }

  switchStars(idx, speed) {
    this.mySwiper.slideTo(idx, speed, false);
  }

  play() {
    //todo this.switchStars(idx, speed);
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
      onSlideChangeEnd: (swiper) => {
        console.log(swiper.activeIndex);
      }
    });
    this.play();
  }

  componentWillUnmount() {
    this.mySwiper = null;
    clearInterval(this.autoPlay);
  }

  render() {
    let starDetailIndex = this.state.dIndex;
    let picSrc = details[starDetailIndex];

    const swiperStyle = classnames([css.playWrapper, 'swiper-container']);
    const swiperSlide = classnames([css.playSlide, 'swiper-slide']);
    const screen = classnames([css.screen]);
    return (
      <div className={screen}>
        <img className={css.topHeader} src={topHeader}/>
        <div className={css.content}>
          <div className={css.contentVideo}>
            <video />
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
