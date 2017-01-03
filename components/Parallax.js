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

import { animation, color, media, space } from '../styles/style-utils';

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
  top: 75vh;
  transition: opacity 1000ms 500ms, transform 1000ms 500ms ${animation.deceleration};
  transform: translate3D(0, -100%, 0) scale(2);
  z-index: 1;

  ${media.s`
    background-size: 150% auto;
  `}
`;

const Colophon = styled.div`
  background-color: ${color.black};
  color: white;
  font-size: 0.75em;
  font-weight: 700;
  left: 0;
  letter-spacing: 0.0625em;
  padding-bottom: ${space(0.5)};
  padding-top: ${space(0.5)};
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 100vh;
  transform: translateY(-100%);
  width: 100%;
  z-index: 200;

  a {
    color: ${color.blue};
  }
`;

/**
 * @section Component
 */

export default class extends Component {
  constructor(props) {
    super(props);
    this.animateIn = this.animateIn.bind(this);
    this.state = {
      top: '100vh',
      visible: false,
    };
  }
  componentDidMount() {
    this.animateIn();
    this.setTop();
    window.addEventListener('resize', this.setTop);
  }
  animateIn() {
    this.setState({ visible: true });
  }
  setTop() {
    this.setState({ top: `${this.overlay.clientHeight}px` });
  }
  handleResize() {
    this.setTop();
  }
  render() {
    return (
      <Wrapper>
        <Overlay innerRef={(overlay) => { this.overlay = overlay }}>{this.props.children}</Overlay>
        <Background style={{
          top: this.state.top,
          opacity: `${this.state.visible ? '1' : '0'}`,
          transform: `${this.state.visible ? 'translate3D(0, -100%, -100px) scale(2)' : 'translate3D(0, -87.5%, -100px) scale(2)'}`,
        }} />
        <Colophon style={{ top: this.state.top }}>
          Made with 🍊 by <a href="http://madewithenvy.com" target="_blank"
          rel="noopener">Envy</a> and <a href="http://macbethstudio.com"
          target="_blank" rel="noopener">Macbeth Studio</a>
        </Colophon>
      </Wrapper>
    );
  }
}
