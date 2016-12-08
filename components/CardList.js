/**
 * @module Videogrid
 */

/**
 * @section Deps
 */

import React, { Component } from 'react';
import { style } from 'next/css';
import Link from 'next/link';

import animation from '../styles/animations';
import colors from '../styles/colors';
import typography from '../styles/typography';

/**
 * @section Styles
 */

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '4em',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1080px',
  },
  col: {
    padding: '16px',
    marginBottom: '1.5em',
    '@media (min-width: 450px)': {
      width: '50%',
    },
  },
  img: {
    height: '37.5%',
    left: '50%',
    maxWidth: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: `transform 4s ${animation.deceleration}`,
    width: 'auto',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    ':hover .thumb': {
      boxShadow: `0 4px 12px ${colors.blue}`,
      img: {
        transform: 'translate(-50%, -50%) scale(1.2)',
      },
    },
  },
  thumb: {
    background: `${colors.blueSS}`,
    borderRadius: '6px',
    marginBottom: '1em',
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
    transition: 'box-shadow 200ms',
  },
  title: {
    color: `${colors.blue}`,
    fontFamily: `${typography.heading}`,
    fontSize: '26px',
    fontWeight: '700',
    letterSpacing: '0.03725em',
    margin: '0',
  },
  subtitle: {
    color: `${colors.blueSS}`,
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '0.2em',
    marginBottom: '0',
    marginTop: '0',
    textTransform: 'uppercase',
  },
};

/**
 * @section Markup
 */

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style(styles.root)}>
        {this.props.cards.map((creator, key) => (
          <div key={key} className={style(styles.col)}>
            <Link href={`/creator/${creator.slug}`}>
              <a className={style(styles.link)}>
                <div
                  className={style(styles.thumb)}
                  style={{ backgroundColor: creator.color || undefined }}
                >
                  <img
                    className={style(styles.img)}
                    src={`/static/assets/${creator.slug}.svg`}
                    alt={creator.name}
                  />
                </div>
                <h2 className={style(styles.title)}>{creator.name}</h2>
                <h3 className={style(styles.subtitle)}>{creator.title}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
