/**
 * @module Header
 */

import React from 'react';
import { style } from 'next/css';
import Link from 'next/link';

const styles = {
  root: {
    marginTop: '24px',
    marginBottom: '24px',
  },
  logo: {
    height: '64px',
    width: 'auto',
    '@media (width >= 450px)': {
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
