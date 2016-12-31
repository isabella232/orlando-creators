/**
 * Parallax
 *
 * Scrollable viewport
 */

/**
 * @section Includes
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import { color, media } from '../styles/style-utils';

/**
 * @section Styles
 */

const Wrapper = styled.div`
  background-color: ${color.blueTT};
`;

const Overlay = styled.div`
  position: relative;
  z-index: 10;
`;

const Background = styled.div`
  background-image: url(/static/assets/orlando.svg);
  background-position: center bottom;
  background-size: 250% auto;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 100vh;
  transform: translate3D(0, -100%, -100px) scale(2);
  z-index: 1;

  ${media.s`
    background-size: 150% auto;
  `}
`;

/**
 * @section Component
 */

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { top: '100vh' };
  }
  setTop() {
    this.setState({ top: `${this.overlay.clientHeight}px` });
  }
  handleResize() {
    this.setTop();
  }
  componentDidMount() {
    this.setTop();
  }
  render() {
    return (
      <Wrapper>
        <Overlay innerRef={(overlay) => { this.overlay = overlay }}>{this.props.children}</Overlay>
        <Background style={{ top: this.state.top }} />
      </Wrapper>
    );
  }
}
