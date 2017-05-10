/**
 * Parallax
 * Scrollable viewport
 */

/**
 * @section Includes
 */

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

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

const SlideUp = keyframes`
  to {
    transform: translateY(100%) scale(2);
    transform-origin: 50% 100%;
    opacity: 1;
  }
`;

const Background = styled.div`
  animation: ${SlideUp} 1000ms 500ms ${animation.deceleration};
  animation-fill-mode: forwards;
  background-image: url(/static/assets/orlando.svg);
  background-position: center bottom;
  background-size: 250% auto;
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  transform-origin: 50% 100%;
  transform: translateY(112%) scale(2);
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
    this.state = {
      bodyHeight: '100vh',
    };
    this.setHeight.bind(this);
  }
  componentDidMount() {
    this.setHeight();
    window.addEventListener('resize', () => this.setHeight());
  }
  componentDidUpdate() {
    this.setHeight();
  }
  setHeight() {
    if(!this.overlay) return false;
    let height = `${this.overlay.clientHeight}px`;
    if(height !== this.state.bodyHeight) {
      this.setState({ bodyHeight: height });
    }
  }
  render() {
    return (
      <Wrapper>
        <Overlay innerRef={(overlay) => { this.overlay = overlay; }}>{this.props.children}</Overlay>
        <BackgroundContainer style={{
          top: `calc(${this.state.bodyHeight} - 100vh)`,
        }}>
          <Background />
        </BackgroundContainer>
        <Colophon style={{ top: this.state.bodyHeight }}>
          Made with 🍊 by <a href="http://madewithenvy.com" target="_blank"
          rel="noopener">Envy</a> and <a href="http://macbethstudio.com"
          target="_blank" rel="noopener">Macbeth Studio</a>
        </Colophon>
      </Wrapper>
    );
  }
}
