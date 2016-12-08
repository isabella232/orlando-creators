/**
 * @module Footer
 */

import React from 'react';
import { style } from 'next/css';

const styles = {
  root: {
    marginBottom: '2em',
    marginTop: '2em',
    textAlign: 'center',
  },
};

export default () => (
  <footer className={style(styles.root)}>© 2016 Envy</footer>
);
