import React from 'react';
import classnames from 'classnames';
import css from './index.less';

class ColorCheck extends React.Component {

  constructor(props) {
    super(props);
  }

  checkColor(index) {
    const {checkColor} = this.props;
    checkColor(index);
  }

  renderColorCheck() {
    const {product, index} = this.props;
    const {skus, skuImage} = product;
    const {sizeIndex, colorIndex} = index;
    let sku = skus.map((item) => {
      return item[sizeIndex];
    });
    sku = sku || [];
    let colorResult = skuImage.map((item, idx) => {
      const checked = idx === colorIndex;
      const cantCheck = sku[idx] === null;
      const cls = classnames([css.item, {[css.check]: checked}, {[css.cantCheck]: cantCheck}]);
      return (<div onClick={this.checkColor.bind(this, idx)} className={cls}
                   style={{backgroundImage: `url(${item}_100x100q90.jpg)`}} key={idx}>
        <span className={classnames({[css.span]: cantCheck})}/>
      </div>);
    });
    let width = skuImage.length * 120;
    width = width > 864 ? 864 : width;
    const style = {
      width: width / 108 + 'rem',
      left: '50%',
      marginLeft: -(width / 108) / 2 + 'rem'
    };
    return <div className={css.color} style={style}>{colorResult}</div>;
  }

  render() {
    const colorCheck = this.renderColorCheck();
    return (
      <div className={css.colorCheck}>
        <div className={css.text}>颜色选择</div>
        {colorCheck}
      </div>
    );
  }
}

export default ColorCheck;
