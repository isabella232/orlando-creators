import React, { Component } from 'react';
import { css } from 'glamor';
import colors from '../styles/colors';

const people = [
  {
    name: 'Ayana Campbell',
    image: 'ayana.jpg',
    title: 'Design + Animation',
  },
  {
    name: 'Drew Powers',
    image: 'drew.jpg',
    title: 'Design + Code',
  },
  {
    name: 'Macbeth Studio',
    image: 'macbeth-studio.svg',
    title: 'Videography',
  },
];

const style = {};

style.blurb = css({
  color: `${colors.blue}`,
  fontSize: '28px',
  fontWeight: 200,
  lineHeight: 1.5,
  marginTop: '0.5em',
});
style.creditTitle = css({
  color: colors.blue,
  fontSize: '14px',
  fontWeight: 300,
  letterSpacing: '0.125em',
  marginBottom: '2em',
  textAlign: 'center',
  textTransform: 'uppercase',
});
style.flamingo = css({
  height: '128px',
  width: '128px',
});
style.header = css({
  paddingBottom: '2em',
  paddingTop: '2em',
  textAlign: 'center',
});
style.person = css({
  flex: 1,
  textAlign: 'center',
  '& img': {
    borderRadius: '50%',
    height: '128px',
    width: '128px',
  },
  ' & h4': {
    marginTop: 0,
    marginBottom: 0,
  },
  ' & h5': {
    marginTop: 0,
    marginBottom: 0,
  },
});
style.personContainer = css({
  display: 'flex',
  marginBottom: '4em',
  width: '100%',
});
style.summary = css({
  fontWeight: 300,
  lineHeight: 1.5,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '30em',
  textAlign: 'left',
});

export default class extends Component {
  render() {
    return (
      <div className={style.creditContainer}>
        <h3 className={style.creditTitle}>Brought to you by</h3>
        <div className={style.personContainer}>
          {people.map((person, key) => (
            <div id={key} className={style.person}>
              <img src={`/static/assets/${person.image}`} alt={person.name} />
              <h4>{person.name}</h4>
              <h5>{person.title}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
