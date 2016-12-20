import React, { Component } from 'react';
import { style } from 'next/css';

const styles = {
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '800px',
  },
  large: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1080px',
    '@media screen and (min-width: 600px)': {
      maxWidth: '1200px',
    },
  },
};

export default class extends Component {
  constructor(props) {
    super(props);
    let className = this.props.size == 'l' ? 'large' : 'root';
    this.state = {
      styles: styles[className]
    };
  }
  render() {
    return <div className={style(this.state.styles)}>{this.props.children}</div>;
  }
}
