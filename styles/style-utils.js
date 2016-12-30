/**
 * Style Utilities
 *
 * Constants for CSS
 */

import { css } from 'styled-components';

/**
 * @section Animation
 */

const fastOutSlowIn = 'cubic-bezier(0.4, 0, 0.2, 1)';
const linearOutSlowIn = 'cubic-bezier(0, 0, 0.2, 1)';
const fastOutLinearIn = 'cubic-bezier(0.4, 0, 1, 1)';

export const animation = {
  acceleration: fastOutLinearIn,
  deceleration: linearOutSlowIn,
  default: fastOutSlowIn,
  fastOutLinearIn,
  fastOutSlowIn,
  linearOutSlowIn,
  sharp: fastOutLinearIn,
  standard: fastOutSlowIn,
};

/**
 * @section Color
 */

export const color = {
  black: '#00303E',
  blue: '#0fa7c7',
  blueSS: '#005066',
  blueTT: '#f0fdff',
  green: '#80a85f',
  greenS: '#34714a',
  orange: '#ff8e66',
  pink: '#fb7a54',
  teal: '#3df2cf',
};

/**
 * @section Media Queries
 */

export const media = {
  s: (...args) => css`
    @media (min-width: 600px) {
      ${css(...args)}
    }
  `,
  m: (...args) => css`
    @media (min-width: 900px) {
      ${css(...args)}
    }
  `,
  l: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1800px) {
      ${css(...args)}
    }
  `,
};

/**
 * @section Typography
 */

export const typography = {
  text: 'soleil, Avenir, Verdana, sans-serif',
  heading: 'fatfrank, Verdana, sans-serif',
};