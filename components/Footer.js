/**
 * @module Footer
 */

import React from 'react';
import styled from 'styled-components';

import { color } from '../styles/style-utils';

/**
 * @section Styles
 */

const Footer = styled.footer`
  background-color: ${color.black};
  margin-top: 6em;
`;

const Colophon = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.0625em;
  line-height: 2;
  pagging-bottom: 1em;
  padding-top: 1em;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: 10;
`;

export default () => (
  <Footer>
    <Colophon>
      Made with 🍊  by <a href="http://madewithenvy.com/" rel="noopener" target="_blank">Envy</a> and <a href="http://macbethstudio.com/" target="_blank">Macbeth Studio</a>
    </Colophon>
  </Footer>
);
