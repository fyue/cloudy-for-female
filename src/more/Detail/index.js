import React from 'react';
import css from './index.less';
import detailImage from '../../image/detail.jpg';
import ColorCheck from './ColorCheck';
import SizeCheck from './SizeCheck';
import Prize from './Prize';
// import Top from './Top';
import Top from './TopSwiper';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: {
        sizeIndex: 0,
        colorIndex: 0
      },
      bigImage: '',
    };
    this.checkColor = this.checkColor.bind(this);
    this.checkSize = this.checkSize.bind(this);
    this.setBigImage = this.setBigImage.bind(this);
    this.back = this.back.bind(this);
  }

  checkColor(index) {

    const {itemId, products} = this.props;
    const product = products[itemId];

    const color = this.state.index.colorIndex === index ? -1 : index;
    let uri = '';
    if (color === -1) {
      uri = product.productImage[0];
    } else {
      uri = product.skuImage[index];
    }
    this.setBigImage(uri);
    this.setState((state) => {
      state.index.colorIndex = state.index.colorIndex === index ? -1 : index;
    });
  }

  checkSize(index) {
    this.setState((state) => {
      state.index.sizeIndex = state.index.sizeIndex === index ? -1 : index;
    });
  }

  setBigImage(uri) {
    this.setState((state) => {
      state.bigImage = uri + '_500x500q90.jpg_.webp';
    });
  }



  back() {
    this.props.back();
  }

  render() {
    const {itemId, products} = this.props;
    const {index} = this.state;
    const product = products[itemId];
    return (
      <div className={css.detail} style={{backgroundImage: `url(${detailImage})`}} key="detail">
        <Top product={product} bigImage={this.state.bigImage} index={index} setBigImage={this.setBigImage}/>
        <div className={css.bottom}>
          <SizeCheck product={product} index={index} checkSize={this.checkSize}/>
          <ColorCheck product={product} index={index} checkColor={this.checkColor} setBigImage={this.setBigImage}/>
          <div className={css.title}>{product.title}</div>
          <div className={css.line}/>
          <Prize product={product} index={index}/>
        </div>
        <div className={css.back} onClick={this.back}/>
      </div>
    );
  }
}

export default Detail;
