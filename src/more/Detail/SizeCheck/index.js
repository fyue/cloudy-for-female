import React from 'react';
import classnames from 'classnames';
import css from './index.less';

class ColorCheck extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  checkSize(index) {
    this.props.checkSize(index);
  }

  renderSizeCheck() {
    const {product, index} = this.props;
    let {skus, skuSize} = product;
    const {sizeIndex, colorIndex} = index;
    const sku = skus[colorIndex] || [];
    const skuSizeX = skuSize.length === 0 ? ['默认尺寸'] : skuSize;
    let size = skuSizeX.map((item, idx) => {
      const check = sizeIndex === idx;
      const cantCheck = sku[idx] === null;
      const cls = classnames([css.item, {[css.checked]: check}, {[css.cantCheck]: cantCheck}]);
      return <div onClick={this.checkSize.bind(this, idx)} key={item} className={cls}>{item}</div>;
    });
    let width = skuSizeX.length * 211 + (skuSizeX.length - 1) * 45;
    width = width > 980 ? 980 : width;
    const style = {
      width: width / 108 + 'rem',
      left: '50%',
      marginLeft: -(width / 108) / 2 + 'rem'
    }
    return <div className={css.sizeBtn} style={style}>{size}</div>;
  }

  render() {

    const sizeCheck = this.renderSizeCheck();
    return (
      <div className={css.sizeCheck}>
        <div className={css.text}>尺寸选择</div>
        {sizeCheck}
      </div>
    );
  }
}

export default ColorCheck;
