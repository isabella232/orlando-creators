/**
 * Individual creator page
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import Cell from './Cell';
import Video from './Video';
import { color, media, space } from '../styles/style-utils';

/**
 * @section Styles
 */

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 8px 48px rgba(0, 80, 102, 0.2);
  margin-bottom: 4em;
  padding: ${space(1)};

  ${media.s`
    padding: ${space(2)};
  `}
`;

const Button = styled.a`
  background-color: ${color.blue};
  border-radius: 2em;
  color: white;
  display: inline-block;
  font-size: 0.875em;
  font-weight: 700;
  letter-spacing: 0.125em;
  margin-top: 2em;
  padding-bottom: 0.75em;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.75em;
  text-transform: uppercase;
  transition: background-color 200ms;

  &:focus,
  &:hover {
    background-color: ${color.blueT};
  }
`;

/**
 * @section Template
 */

export default class extends Component {
  render() {
    return (
      <div>
        <Cell large>
          <Video src={`https://www.youtube.com/embed/${this.props.creator.videoID}`} />
        </Cell>
        <Cell>
          <Card>
            <h1>Justin Mezzell</h1>
            <p>
              <strong>OC</strong><br />
              Who is Justin Mezzell?
            </p>
            <p>
              <strong>JM</strong><br />
              Justin Mezzell is a designer and illustrator residing in Orlando,
              Florida. I currently serve as the creative director at <a
              href="https://www.codeschool.com" target="_blank" rel="noopener">Code
              School</a> as well as do my own freelance illustration as well as
              sell goods and build them with a friend of mine, <a
              href="http://rog.ie/" target="_blank" rel="noopener">Rogie King</a>,
              under the moniker <a href="https://superteamdeluxe.com/"
              target="_blank" rel="noopener"><i>Super&nbsp;Team&nbsp;Deluxe</i></a>.
            </p>
            <p>
              <strong>OC</strong><br />
              Why are you in Orlando?
            </p>
            <p>
              <strong>JM</strong><br />
              I love the place that Orlando’s in right now. I think that we
              have a lot of really great communities of people doing creative
              things. I’ve seen creative projects pop up all over the place. And
              if you decide to take ownership now, you just can. It’s not a
              walled garden. If you decide you want to be vocal and you want to
              be a voice here, you can immediately do it and you can own&nbsp;that.
            </p>
            <p>
              <strong>OC</strong><br />
              What’s so special to you about visual creative expression, as
              opposed to music or theater?
            </p>
            <p>
              <strong>JM</strong><br />
              I think what originally drew me to it was that I could do it
              myself. There weren’t all of these other inputs that I needed in
              order to get started on it. It’s as simple as having software. By
              the time I found out design was a career, I was already thinking I
              had to go into these other fields. I figured I’d do business or do
              something else that actually makes money. And then I was like
              “wait—people draw things and make things look nice? And they get
              paid to do this? That sounds really&nbsp;interesting!”
            </p>
            <p>
              <strong>OC</strong><br />
              What do you think Orlando needs most right now?
            </p>
            <p>
              <strong>JM</strong><br />
              I think Orlando needs people that are willing to start a
              conversation. Most of the relationships that I have in design—with
              people that I talk with every day—I’ve never met before. But it was
              because one of us was interested in instigating a conversation by
              something as simple as an email. I would love to see people who are
              in different crafts and different mediums reach out and say “I
              want to build an experience. You do <i>this</i>. I do <i>this</i>.
              How can we do <i>this</i>? How do we create something that’s
              bigger than the sum of our&nbsp;parts?”
            </p>
            <p>
              <strong>OC</strong><br />
              Someone should steal that idea.
            </p>
            <p>
              <strong>JM</strong><br />
              Yeah. Somebody should.
            </p>
            <p>
              <strong>OC</strong><br />
              Would you be okay if someone stole that?
            </p>
            <p>
              <strong>JM</strong><br />
              Somebody could totally take it! I don’t even need credit. Just
              tell me when you release your first experience and I will be there.
            </p>
            <p>
              <strong>OC</strong><br />
              What advice would you give to upcoming generations of Orlando Creators?
            </p>
            <p>
              <strong>JM</strong><br />
              I would say don’t wait for an invitation. That’s probably the
              biggest thing that I really believe. I didn’t go to school for
              design, and so when I came into this industry, I didn’t know where
              to go. I didn’t know how long was the ramp-up time before I can get
              involved or before I’m evaluated as a designer. I would say break
              down those barriers. Send an email to someone. Figure out how to
              get involved. I’d say we need more young people to just feel like
              they deserve a seat at the table. And they can just jump in with
              both feet and start going.
            </p>
            <div style={{ textAlign: 'center' }}>
              <Button href="http://justinmezzell.com">Visit Justin’s Site</Button>
            </div>
          </Card>
        </Cell>
      </div>
    );
  }
}
