/**
 * @module Header
 */

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

import { color, media, space } from '../styles/style-utils';

/**
 * @section Styles
 */

const Container = styled.header`
  display: block;
  paddingTop: 24px;
  paddingBottom: 24px;
  overflow: hidden;
`;

const FadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const Logo = styled.img`
  animation: ${FadeIn} 1000ms linear;
  animation-fill-mode: forwards;
  display: block;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  position: relative;
  width: auto;
  z-index: 10;

  ${media.s`
    height: 64px;
  `}
`;

const ActiveArea = styled.div`
  color: ${color.black};
  display: block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.0625em;
  margin-top: ${space(0.5)};
  text-transform: uppercase;

  ${media.s`
    line-height: 64px;
    margin-top: 0;
  `}
`;

const Nav = styled.nav`
  align-items: center;
  animation: ${FadeIn} 1000ms 500ms linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  left: 0;
  margin-left: ${space()}
  margin-right: ${space()}
  max-width: calc(100% - 64px);
  opacity: 0;
  padding: 0;
  transition: opacity 500ms 250ms;
  width: 100%;

  ${media.s`
    justify-content: flex-end;
    margin: 0;
    padding-right: 32px;
    position: absolute;
    top: ${space()};
  `}

  a {
    cursor: pointer;
  }
`;

/**
 * @section Template
 */

export default class extends Component {
  constructor(props) {
    super(props);
    this.animateIn = this.animateIn.bind(this);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.animateIn();
  }
  animateIn() {
    this.setState({ visible: true });
  }
  setTop() {
    this.setState({ top: `${this.overlay.clientHeight}px` });
  }
  render() {
    return (
      <Container>
        <Link href="/">
          <a>
            <Logo
              src="/static/assets/orlando-creators.svg"
              alt="Orlando Creators"
            />
          </a>
        </Link>
        <Nav>
          <Link href="/about">
            <ActiveArea>About</ActiveArea>
          </Link>
        </Nav>
      </Container>
    );
  }
}
