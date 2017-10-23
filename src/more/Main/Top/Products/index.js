import React from 'react';
import classnames from 'classnames';
import css from './index.less';

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let [product, label] = this.props.product;
    let {active} = this.props;
    const products = classnames([css.products]);
    return (
      <div className={products} onTouchEnd={this.props.showTopProduct}>
        <img src={product}/>
        <div className={css.label} style={active ? {backgroundColor: 'rgb(238, 195, 139)'} : {}}>
          <span>{label}</span>
        </div>
      </div>
    );
  }
}
export default Products;
