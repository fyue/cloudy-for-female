import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import QRCode from 'qrcode.react';

class Top extends React.Component {

  constructor(props) {
    super(props);
  }

  renderImageList() {
    const {product, bigImage} = this.props;
    const imageList = product.productImage;
    return imageList.map((item, index) => {
      const style = {
        backgroundImage: `url(${item}_90x90q90.jpg_.webp)`
      };
      let checked = bigImage === '' && index === 0 || bigImage === item + '_250x250q80.jpg_.webp';
      const cls = classnames([css.image, {[css.checked]: checked}]);
      return <div className={cls} key={index} style={style} onClick={this.setBigImage.bind(this, index)}/>;
    });
  }

  setBigImage(idx) {
    const {product} = this.props;
    const uri = product.productImage[idx];
    this.props.setBigImage(uri);
  }

  getUrl() {
    const {sizeIndex, colorIndex} = this.props.index;
    const {product} = this.props;
    const {skus, itemId} = product;
    const skuId = skus[colorIndex] && skus[colorIndex][sizeIndex] ? skus[colorIndex][sizeIndex].skuId : '';
    const base = 'https://detail.tmall.com/item.htm';
    return base + `?id=${itemId}` + (skuId !== '' ? `&skuId=${skuId}` : '');
  }

  render() {
    const {product, bigImage} = this.props;
    const imageList = this.renderImageList();
    return (
      <div className={css.top}>
        <div className={css.inner}>
          <div className={css.bigImage}
               style={{backgroundImage: `url(${bigImage || product.productImage[0] + '_250x250q80.jpg_.webp'})`}}/>
          <div className={css.imageList}>
            {imageList}
          </div>
        </div>
        <div className={css.qrcode}>
          <QRCode value={this.getUrl()}/>
        </div>
      </div>

    );
  }
}

export default Top;
