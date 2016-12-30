/**
 * @module Header
 */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { color, media } from '../styles/style-utils';

/**
 * @section Styles
 */

const Base = styled.div`
  paddingTop: 24px;
  paddingBottom: 24px;
  overflow: hidden;
`;

const Logo = styled.img`
  height: 48px;
  left: 50%;
  position: absolute;
  top: 24px;
  transform: translateX(-50%);
  width: auto;

  ${media.s`
    height: 64px;
  `}
`;

const ActiveArea = styled.div`
  color: ${color.blueSS};
  display: block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.0625em;
  line-height: 64px;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 64px);
  padding-right: 32px;
`;

/**
 * @section Template
 */

export default () => (
  <Base>
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
  </Base>
);
