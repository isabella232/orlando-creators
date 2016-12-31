import React, { Component } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  height: 0;
  paddingTop: 56.25%;
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

export default class extends Component {
  render() {
    return (
      <VideoContainer>
        <iframe
          src={this.props.src}
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        />
      </VideoContainer>
    );
  }
}
