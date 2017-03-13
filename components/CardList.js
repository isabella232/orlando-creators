/**
 * @module Videogrid
 */

/**
 * @section Deps
 */

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

import { animation, color, media, space, typography } from '../styles/style-utils';

/**
 * @section Styles
 */

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Column = styled.div`
  margin-bottom: 1.5em;
  padding: 16px;
  width: 100%;

  ${media.s`
    width: 50%;
  `}
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ActiveArea = styled.div`
  animation: ${FadeIn} 600ms 300ms linear;
  animation-fill-mode: forwards;
  display: block;
  text-align: center;
  text-decoration: none;
  opacity: 0;

  ${media.s`
    &:hover div div:first-child,
    &:focus div div:first-child {
      opacity: 0;
    }
    &:hover img,
    &:focus img {
      opacity: 1;
    }
  `}
`;

const CardAnimation = keyframes`
  to {
    transform: translateY(0);
  }
`;

const Card = styled.div`
  animation-delay: 200ms;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-name: ${CardAnimation};
  animation-timing-function: ${animation.deceleration};
  cursor: pointer;
  margin-bottom: 1em;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  transform: translateY(32px);
  user-select: none;
  z-index: 10;
`;

const PreviewContainer = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: opacity 200ms;
  width: 100%;
  z-index: 10;

  &::before {
    background-color: ${props => props.color};
    border-radius: 50%;
    bottom: 0;
    content: "";
    height: ${space(10)};
    left: 0;
    position: absolute;
    transform: translate(-50%, 65%);
    width: ${space(10)};
    z-index: 10;
  }
`;

const VideoContainer = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 5;

  &::before {
    background-color: ${props => props.color};
    border-radius: 50%;
    bottom: 0;
    content: "";
    height: ${space(10)};
    left: 0;
    position: absolute;
    transform: translate(-50%, 65%);
    width: ${space(10)};
    z-index: 5;
  }
`;

const ComingSoon = styled.div`
  animation: ${FadeIn} 1500ms 750ms linear;
  animation-fill-mode: forwards;
  background-color: rgba(0,80,102,0.1);
  border-radius: 8px;
  height: 0;
  opacity: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  user-select: none;
  div {
    font-size: 0.875em;
    font-weight: 700;
    left: 50%;
    letter-spacing: 0.125em;
    opacity: 0.625;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    display: block;
    height: 3em;
    opacity: 0.5;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.5em;
    width: 3em;
  }
`;

const Icon = styled.img`
  bottom: -1em;
  height: 50%;
  left: 0;
  max-width: none;
  pointer-events: none;
  position: absolute;
  transition: transform 4s ${animation.deceleration};
  width: auto;
  z-index: 10;
`;

const Play = styled.img`
  height: 2.5em;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  opacity: 0.625;
  transform: translate(-50%, -50%);
  transition: opacity 300ms;
  width: 2.5em;
  z-index: 15;
`;

const Title = styled.h2`
  color: ${color.blue};
  font-family: ${typography.heading};
  kont-size: 26px;
  font-weight: 700;
  letter-spacing: 0.03725em;
  line-height: 1.3;
  margin: 0;
`;

const Subtitle = styled.h3`
  color: ${color.blueSS};
  fontSize: 14px;
  fontWeight: 700;
  letterSpacing: 0.0625em;
  line-height: 1.3;
  margin-bottom: 0;
  margin-top: 0;
`;

const Video = styled.video`
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
`;

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
    this.video.pause();
  }
  playVideo() {
    this.video.play();
  }
  render() {
    return (
      <Container onMouseEnter={this.playVideo} onMouseLeave={this.pauseVideo}>
        {this.props.cards.map((creator, key) => (
          <Column key={key}>
            <Link href={`/creator/${creator.slug}`}>
              <ActiveArea>
                <Card style={{ backgroundColor: `${creator.color}` }}>
                  <PreviewContainer color={creator.color2} style={{ backgroundImage: `url(/static/assets/${creator.slug}.jpg)` }}>
                    <Icon src={`/static/assets/${creator.slug}.png`} alt={creator.name} />
                  </PreviewContainer>
                  <VideoContainer color={creator.color2}>
                    <Video innerRef={(video) => { this.video = video; }} loop={true} preload="none">
                      <source src={`/static/assets/${creator.slug}.mp4`} type="video/mp4" />
                    </Video>
                    <Icon src={`/static/assets/${creator.slug}.gif`} alt={creator.name} />
                  </VideoContainer>
                  <Play src="/static/assets/play.svg" />
                </Card>
                <Title>{creator.name}</Title>
                <Subtitle>{creator.title}</Subtitle>
              </ActiveArea>
            </Link>
          </Column>
        ))}
        <Column>
          <ComingSoon>
            <div>
              <img src="/static/assets/alarm.svg" role="presentation" />
              Coming soon!
            </div>
          </ComingSoon>
        </Column>
      </Container>
    );
  }
}
