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

const BackgroundContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 100vh;
  transform: translateY(-50%) translateZ(-1px)
  transform-origin: 50% 100%;
  transform-style: preserve-3d;
  transition: opacity 1000ms 500ms;
  z-index: 1;
`;

const Background = styled.div`
  background-image: url(/static/assets/orlando.svg);
  background-position: center bottom;
  background-size: 250% auto;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transform-origin: 50% 100%;
  transform: translateY(100%) scale(2);
  transition: transform 1000ms 500ms ${animation.deceleration};
  width: 100%;

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
    this.setTop.bind(this);
  }
  componentDidMount() {
    this.animateIn();
    this.setTop();
  }
  setTop() {
    const h = this.overlay.clientHeight;
    this.setState({ top: `${h}px` });
  }
  animateIn() {
    this.setState({ visible: true });
  }
  handleResize() {
    this.setTop();
  }
  render() {
    return (
      <Wrapper>
        <Overlay innerRef={(overlay) => { this.overlay = overlay; }}>{this.props.children}</Overlay>
        <BackgroundContainer style={{
          top: `calc(${this.state.top} - 100vh)`,
          opacity: `${this.state.visible ? '1' : '0'}`,
        }}>
          <Background style={{
            transform: this.state.visible ? 'translateY(100%) scale(2)' : 'translateY(112.5%) scale(2)',
            transformOrigin: '50% 100%',
          }} />
        </BackgroundContainer>
        <Colophon style={{ top: this.state.top }}>
          Made with 🍊 by <a href="http://madewithenvy.com" target="_blank"
          rel="noopener">Envy</a> and <a href="http://macbethstudio.com"
          target="_blank" rel="noopener">Macbeth Studio</a>
        </Colophon>
      </Wrapper>
    );
  }
}
