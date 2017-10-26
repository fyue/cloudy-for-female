import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import QRCode from 'qrcode.react';


let swiper = null;
class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      swiperIndex: 0
    };
  }

  renderImageList() {
    const {product} = this.props;
    const imageList = product.productImage;
    return imageList.map((item, index) => {
      const style = {
        backgroundImage: `url(${item}_90x90q90.jpg_.webp)`
      };
      let checked = this.state.swiperIndex === index;
      const cls = classnames([css.image, {[css.checked]: checked}]);
      return <div className={cls} key={index} style={style} onClick={this.changeSwiper.bind(this, index)}/>;
    });
  }

  changeSwiper(index) {
    this.setState({
      swiperIndex: index
    });
    swiper.slideTo(index, 1000, false);// 切换到第一个slide，速度为1秒
  }

  renderSwiper() {
    const {product} = this.props;
    const imageList = product.productImage;
    return imageList.map((item, index) => {
      const style = {
        backgroundImage: `url(${item}_500x500q90.jpg_.webp)`
      };
      return <div className={css.image + ' swiper-slide'} key={index} style={style}/>;
    });
  }

  componentDidMount() {
    swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      effect: 'cube',
      cube: {
        shadow: false
      },
      onSlideChangeEnd: (swiper) => {
        this.setState({
          swiperIndex: swiper.activeIndex
        });
      }
    });
  }

  setBigImage(idx) {
    const {product} = this.props;
    const uri = product.productImage[idx];
    this.props.setBigImage(uri);
  }

  get getUrl() {
    const {product} = this.props;
    const {itemId} = product;
    return `http://h5.m.taobao.com/app/smg/index.html?codeType=1&targetType=item&isUniquePage=0&isOpenBox=1&storeId=177259234&sellerId=287745076&itemId=${itemId}`;
  }

  render() {
    const imageList = this.renderImageList();
    const swiperView = this.renderSwiper();
    return (
      <div className={css.top}>
        <div className={css.inner}>
          <div className={css.bigImage + ' swiper-container'} >
            <div className="swiper-wrapper">
              {swiperView}
            </div>
          </div>
          <div className={css.imageList}>
            {imageList}
          </div>
        </div>
        <div className={css.qrcode}>
          <QRCode value={this.getUrl}/>
        </div>
      </div>

    );
  }
}

export default Top;
