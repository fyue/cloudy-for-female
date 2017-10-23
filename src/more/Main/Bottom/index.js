import React from 'react';
import classnames from 'classnames';
import css from './index.less';

class Bottom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const bottom = classnames([css.bottom]);
    return (
      <div className={bottom}>
        <div className={css.bod}>
          <div className={css.left}>
            <div onTouchEnd={() => this.props.goDiffCataSecond(1)}/>
            <div onTouchEnd={() => this.props.goDiffCataSecond(2)}/>
            <div onTouchEnd={() => this.props.goDiffCataSecond(3)}/>
          </div>
          <div className={css.right}>
            <div onTouchEnd={() => this.props.goDiffCataSecond(4)}/>
            <div onTouchEnd={() => this.props.goDiffCataSecond(5)}/>
            <div onTouchEnd={() => this.props.goDiffCataSecond(6)}/>
            <div onTouchEnd={() => this.props.goDiffCataSecond(7)}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Bottom;
