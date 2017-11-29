/**
 * YouTube wrapper
 */

import React, { Component } from 'react';

/**
 * @section Styles
 */

import styled from 'styled-components';
import { color } from '../styles/style-utils';

const VideoContainer = styled.div`
  background-color: ${color.blueSS};
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Video = props => (
  <VideoContainer>
    <iframe
      src={props.src}
      width="560"
      height="315"
      frameBorder="0"
      allowFullScreen
    />
  </VideoContainer>
);

export default Video;
