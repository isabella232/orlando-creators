import React, { Component } from 'react';
import { css } from 'glamor';

const style = {};

style.root = css({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '800px',
});
style.large = css({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1080px',
  '@media screen and (min-width: 600px)': {
    maxWidth: '1200px',
  },
});

export default class extends Component {
  constructor(props) {
    super(props);
    let className = this.props.size == 'l' ? 'large' : 'root';
    this.state = {
      styles: style[className]
    };
  }
  render() {
    return <div className={this.state.styles}>{this.props.children}</div>;
  }
}
