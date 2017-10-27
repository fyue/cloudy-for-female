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
    let prize;
    if (skuSize.length === 0 ) {
      prize = skus[colorIndex] ? skus[colorIndex].prize : product.subPrice;
    } else {
      prize = skus[colorIndex] && skus[colorIndex][sizeIndex] ? skus[colorIndex][sizeIndex].prize : product.subPrice;
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
