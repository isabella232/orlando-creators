/**
 * @module Header
 */

import React from 'react';
import { style } from 'next/css';
import Link from 'next/link';

const styles = {
  root: {
    paddingTop: '24px',
    paddingBottom: '24px',
    overflow: 'hidden',
  },
  logo: {
    height: '64px',
    width: 'auto',
    '@media (width >= 600px)': {
      height: '80px',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default () => (
  <div className={style(styles.root)}>
    <nav className={style(styles.nav)}>
      <Link href="/">
        <img
          className={style(styles.logo)}
          src="/static/assets/orlando-creators.svg"
          alt="Orlando Creators"
        />
      </Link>
    </nav>
  </div>
);
