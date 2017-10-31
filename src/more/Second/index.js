/*const eachCatalog = {
 type: 'laganxiang',
 header: header1,
 items: [
 [{sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'}],
 [{sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'}],
 [{sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'}],
 [{sale: sale1, label: '爱华仕', price: '1899.00'},
 {sale: sale1, label: '爱华仕', price: '1899.00'}],
 ],
 };*/

import React from 'react';
import classnames from 'classnames';
import css from './index.less';

import backMenu from './images/back.png';

import topHeader from './images/topHeader.png';

export default class Second extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderCenter = this.renderCenter.bind(this);
    this.renderBackMenu = this.renderBackMenu.bind(this);
    this.checkId = this.checkId.bind(this);
  }

  renderBackMenu() {
    return (
      <img className={css.backMenu} src={backMenu} onTouchEnd={() => this.props.go('main')} />
    );
  }

  checkId(index) {
    this.props.goDetail(index);
  }

  renderCenter() {
    let {header, ids, labels, items} = this.props.cataData;
    const {products, goStory} = this.props;
    return (
      <div className={css.centerWapper}>
        <img src={header} onTouchEnd={goStory} />
        <div className={css.bod}>
          <div className={css.scrollWrapper}>
            {items.map((items, index) => (
              <div className={css.eachRow} key={index}>
                {items.map((item, idx) => (
                  <div className={css.eachItem} key={idx} onClick={this.checkId.bind(this, 3 * index + idx)}>
                    <img src={item.sale} />
                    <p>{labels[index * 3 + idx]}</p>
                    <p><span>￥</span><span>{products ? products[3 * index + idx].subPrice : '加载中...'}</span></p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log('enter in second');
    const second = classnames([css.second]);
    return (
      <div className={second}>
        {this.renderBackMenu()}
        <img className={css.topHeader} src={topHeader} />
        {this.renderCenter()}
      </div>
    );
  }
}
