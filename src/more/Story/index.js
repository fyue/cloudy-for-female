import React from 'react';
import classnames from 'classnames';
import css from './index.less';

import pic from './images/stories.jpg';
import backMenu from './images/back.png';

export default class Story extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const storyWrapper = classnames([css.storyWrapper]);
    return (
      <div className={css.posWrapper}>
        <img className={css.backMenu} src={backMenu} onTouchEnd={() => this.props.go('main')}/>
        <div className={storyWrapper}>
          <img className={css.longPic} src={pic}/>
        </div>
      </div>
    );
  }
}
