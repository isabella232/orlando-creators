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
  background-color: ${color.black};
  color: ${color.blueSS};
  font-family: ${typography.text};
  font-feature-settings: common-ligatures;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
}

body {
  overflow-y: scroll;
  overflow-x: hidden;
  perspective: 100px;
  transform-style: preserve-3d;
}

a {
  color: #0ba7c7;
  text-decoration: none;
}

main {
  margin: 0;
  min-height: 100vh;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
}

h1 {
  color: ${color.blue};
  font-family: ${typography.heading};
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 0;
  margin-top: 0;
}

p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 2em;
  margin-top: 2em;
}
`;
