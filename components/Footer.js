/**
 * @module Footer
 */

import React from 'react';
import { style } from 'next/css';
import colors from '../styles/colors';

const styles = {
  bg: {
    backgroundImage: 'url(/static/assets/orlando.svg)',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center bottom',
    height: '300px',
    marginTop: '-4em',
    pointerEvents: 'none',
  },
  colophon: {
    backgroundColor: `${colors.black}`,
    color: 'white',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '0.0625em',
    paddingBottom: '1em',
    paddingTop: '1em',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
};

export default () => (
  <footer className={style(styles.root)}>
    <div className={style(styles.bg)} />
    <div className={style(styles.colophon)}>
      Made with <code>&lt;3</code> by <a href="http://madewithenvy.com/">Envy</a>
    </div>
  </footer>
);
