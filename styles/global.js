import { color, typography } from './style-utils';

export default `
* {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
  padding: 0;
}

html {
  background-color: ${color.blueTT};
  color: ${color.blueSS};
  font-family: ${typography.text};
  font-feature-settings: common-ligatures;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  perspective: 1px;
}

main {
  margin: 0;
  min-height: 100vh;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
}

/* Hack */

header {
 display: none;
}

`;
