import React from 'react';
import css from './index.less';

class Prize extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {product, index} = this.props;
    const {colorIndex, sizeIndex} = index;
    const {skus, skuSize} = product;
    let prizeX = '000';
    if (skuSize.length === 0 ) {
      prizeX = skus[colorIndex] ? skus[colorIndex].prize : '000';
    } else {
      prizeX = skus[colorIndex] && skus[colorIndex][sizeIndex] ? skus[colorIndex][sizeIndex].prize : '000';
    }
    let prize = product.subPrice;
    if (prizeX !== '000') {
      let pre = prizeX.substr(0, prizeX.length - 2);
      let next = prizeX.substr(prizeX.length - 2, 2);
      prize = pre + '.' + next;
    }

    return (
      <div className={css.prize}>
        <div className={css.text}>
          <div className={css.rmb}>RMB</div>
          <div className={css.qhj}>券后价</div>
        </div>
        <div className={css.number}>{prize}</div>
      </div>
    );
  }
}

export default Prize;
