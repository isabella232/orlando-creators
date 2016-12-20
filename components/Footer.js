/**
 * @module Footer
 */

import React from 'react';
import { css } from 'glamor';
import colors from '../styles/colors';

const style = {};

style.root = css({
  backgroundColor: colors.black,
  marginTop: '6em',
});
style.colophon = css({
  color: 'white',
  fontSize: '14px',
  fontWeight: 900,
  letterSpacing: '0.0625em',
  lineHeight: 2,
  paddingBottom: '1em',
  paddingTop: '1em',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'uppercase',
  zIndex: 10,
});

export default () => (
  <footer className={style.root}>
    <div className={style.bg} />
    <div className={style.colophon}>
      Made with 🍊  by <a href="http://madewithenvy.com/" target="_blank">Envy</a> and <a href="http://macbethstudio.com/" target="_blank">Macbeth Studio</a>
    </div>
  </footer>
);
