/**
 * Parallax
 *
 * Scrollable viewport
 */

/**
 * @section Includes
 */

import React, { Component } from 'react';
import { css } from 'glamor';


/**
 * @section Styles
 */

import colors from '../styles/colors';
const style = {};

style.overlay = css({
  position: 'relative',
  zIndex: 10,
});
style.bg = css({
  backgroundImage: 'url(/static/assets/orlando.svg)',
  backgroundPosition: 'center bottom',
  backgroundSize: '150% auto',
  height: '100%',
  left: 0,
  pointerEvents: 'none',
  position: 'fixed',
  right: 0,
  top: 0,
  transform: 'translate3D(0, -100%, -100px) scale(2)',
  zIndex: 1,
});

/**
 * @section Component
 */

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { top: '0px' };
  }
  setTop() {
    this.setState({ top: `${this.refs.overlay.clientHeight}px` });
  }
  handleResize(e) {
    this.setTop();
  }
  componentDidMount() {
    this.setTop();
  }
  render() {
    return (
      <div style={{ backgroundColor: colors.blueTT }}>
        <div ref="overlay" className={style.overlay}>{this.props.children}</div>
        <div className={style.bg} style={{ top: this.state.top }} />
      </div>
    )
  }
}
