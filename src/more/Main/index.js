import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import Top from './Top';
import Bottom from './Bottom';

import bg from './images/bottomBg.png';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const main = classnames([css.main]);
    return (
      <div className={main}>
        <Top {...this.props}/>
        <Bottom {...this.props}/>
        <div className={css.global}>
          <img src={bg}/>
        </div>
      </div>
    );
  }
}
export default Main;
