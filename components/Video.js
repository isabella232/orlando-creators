import React, { Component } from 'react';
import { style } from 'next/css';

const styles = {
  video: {
    height: 0,
    paddingTop: '56.25%',
    position: 'relative',
    width: '100%',
    '& iframe': {
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
};

export default class extends Component {
  render() {
    return (
      <div className={style(styles.video)}>
        <iframe
          src={this.props.src}
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}
