/**
 * @module Videogrid
 */

/**
 * @section Deps
 */

import React, { Component } from 'react';
import { css } from 'glamor';
import Link from 'next/link';

import animation from '../styles/animations';
import colors from '../styles/colors';
import typography from '../styles/typography';

/**
 * @section Styles
 */

const style = {};

style.root = css({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1080px',
  paddingLeft: '16px',
  paddingRight: '16px',
});
style.col = css({
  marginBottom: '1.5em',
  padding: '16px',
  width: '100%',
  '@media(min-width: 600px)': {
    width: '50%',
  },
});
style.container = css({
  borderRadius: '6px',
  boxShadow: `0 16px 32px rgba(0,80,102,0.25)`,
  marginBottom: '1em',
  overflow: 'hidden',
  paddingTop: '56.25%',
  position: 'relative',
  transition: `opacity 200ms, box-shadow 200ms ${animation.standard}, transform 100ms ${animation.deceleration}`,
  userSelect: 'none',
  zIndex: 10,
});
style.containerInnerStatic = css({
  borderRadius: '6px',
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  transition: 'opacity 200ms',
  width: '100%',
  zIndex: 10,
  '::before': {
    backgroundColor: `${colors.blueSS}`,
    borderRadius: '50%',
    bottom: '0',
    content: '""',
    height: '75%',
    left: '0',
    position: 'absolute',
    transform: 'translate(-50%, 62.5%)',
    width: '62.5%',
    zIndex: 10,
  }
});
style.containerInnerDynamic = css({
  borderRadius: '6px',
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 5,
  '::before': {
    backgroundColor: `${colors.blueSS}`,
    borderRadius: '50%',
    bottom: '0',
    content: '""',
    height: '75%',
    left: '0',
    position: 'absolute',
    transform: 'translate(-50%, 62.5%)',
    width: '62.5%',
    zIndex: 5,
  }
});
style.containerComingSoon = css({
  backgroundColor: 'rgba(0,80,102,0.1)',
  borderRadius: '8px',
  height: 0,
  overflow: 'hidden',
  paddingTop: '56.25%',
  position: 'relative',
  userSelect: 'none',
  ' div': {
    fontSize: '0.875em',
    fontWeight: 700,
    left: '50%',
    letterSpacing: '0.125em',
    opacity: 0.625,
    position: 'absolute',
    textAlign: 'center',
    textTransform: 'uppercase',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  ' img': {
    display: 'block',
    height: '3em',
    opacity: 0.5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '0.5em',
    width: '3em',
  },
});
style.icon = css({
  bottom: 0,
  height: '50%',
  left: '1em',
  maxWidth: 'none',
  pointerEvents: 'none',
  position: 'absolute',
  transition: `transform 4s ${animation.deceleration}`,
  width: 'auto',
  zIndex: 10,
});
style.play = css({
  height: '2.5em',
  left: '50%',
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  opacity: 0.625,
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 300ms',
  width: '2.5em',
  zIndex: 15,
});
style.link = css({
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  [`:hover .${style.containerInnerStatic},:focus .${style.containerInnerStatic}`]: {
    opacity: 0,
  },
  [`:hover .${style.play},:focus .${style.play}`]: {
    opacity: 1,
  },
});
style.subtitle = css({
  color: `${colors.blueSS}`,
  fontSize: '13px',
  fontWeight: '400',
  letterSpacing: '0.2em',
  marginBottom: 0,
  marginTop: 0,
  textTransform: 'uppercase',
});
style.title = css({
  color: `${colors.blue}`,
  fontFamily: `${typography.heading}`,
  fontSize: '26px',
  fontWeight: '700',
  letterSpacing: '0.03725em',
  margin: 0,
});
style.video = css({
  height: '100%',
  left: 0,
  opacity: 0.5,
  position: 'absolute',
  top: 0,
  width: '100%',
});

/**
 * @section Markup
 */

export default class extends Component {
  constructor(props) {
    super(props);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }
  pauseVideo() {
    this.refs.video.pause();
  }
  playVideo() {
    this.refs.video.play();
  }
  render() {
    return (
      <div className={style.root} onMouseEnter={this.playVideo} onMouseLeave={this.pauseVideo}>
        {this.props.cards.map((creator, key) => (
          <div key={key} className={style.col}>
            <Link href={`/creator/${creator.slug}`}>
              <a className={style.link}>
                <div className={style.container} style={{backgroundColor: `${creator.color}`}}>
                  <div className={style.containerInnerStatic} style={{backgroundImage: `url(/static/assets/${creator.slug}.jpg)`}}>
                    <img
                      className={style.icon}
                      src={`/static/assets/${creator.slug}.png`}
                      alt={creator.name}
                    />
                  </div>
                  <div className={style.containerInnerDynamic}>
                    <video ref="video" className={style.video} loop={true} preload="none">
                      <source src={`/static/assets/${creator.slug}.mp4`} type="video/mp4" />
                    </video>
                    <img
                      className={style.icon}
                      src={`/static/assets/${creator.slug}.gif`}
                      alt={creator.name}
                    />
                  </div>
                  <img className={style.play} src="/static/assets/play.svg" />
                </div>
                <h2 className={style.title}>{creator.name}</h2>
                <h3 className={style.subtitle}>{creator.title}</h3>
              </a>
            </Link>
          </div>
        ))}
        <div className={style.col}>
          <div className={style.containerComingSoon}>
            <div>
              <img src="/static/assets/alarm.svg" />
              Coming soon!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
