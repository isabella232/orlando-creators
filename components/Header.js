/**
 * @module Header
 */

import React from 'react';
import { css } from 'glamor';
import Link from 'next/link';

import colors from '../styles/colors';

const style = {};

style.root = css({
  paddingTop: '24px',
  paddingBottom: '24px',
  overflow: 'hidden',
});
style.logo = css({
  height: '48px',
  left: '50%',
  position: 'absolute',
  top: '24px',
  transform: 'translateX(-50%)',
  width: 'auto',
  '@media (min-width: 600px)': {
    height: '64px',
  },
});
style.link = css({
  color: `${colors.black}`,
  display: 'block',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.0625em',
  lineHeight: '64px',
  textTransform: 'uppercase',
});
style.nav = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: '32px',
  maxWidth: 'calc(100% - 64px)',
});

export default () => (
  <div className={style.root}>
    <Link href="/">
      <img
        className={style.logo}
        src="/static/assets/orlando-creators.svg"
        alt="Orlando Creators"
      />
    </Link>
    <nav className={style.nav}>
      <Link href="/about">
        <a className={style.link}>About</a>
      </Link>
    </nav>
  </div>
);
