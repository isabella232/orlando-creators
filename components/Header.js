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
  width: auto;

  ${media.s`
    height: 64px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: 24px;
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
  animation: ${FadeIn} 1000ms 500ms linear;
  animation-fill-mode: forwards;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 64px);
  opacity: 0;
  transition: opacity 500ms 250ms;

  ${media.s`
    justify-content: flex-end;
    padding-right: 32px;
  `}
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
          <Logo
            src="/static/assets/orlando-creators.svg"
            alt="Orlando Creators"
          />
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
