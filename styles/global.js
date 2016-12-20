import colors from './colors';
import typography from './typography';

export default `
* {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

html {
  background-color: ${colors.black};
  font-family: ${typography.text};
  font-feature-settings: common-ligatures;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  min-height: 100vh;
}

a {
  color: #0ba7c7;
  text-decoration: none;
}

main {
  background-color: ${colors.blueTT};
}

h1 {
  color: ${colors.blueSS};
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 0;
  margin-top: 0;
}

p {
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 2em;
  margin-top: 2em;
}

@font-face {
  font-family: "Kabel Neue";
  font-style: normal;
  font-weight: 400;
  src: url('/static/assets/kabel-neue-400.woff');
}
@font-face {
  font-family: "Kabel Neue";
  font-style: italic;
  font-weight: 400;
  src: url('/static/assets/kabel-neue-400italic.woff');
}
@font-face {
  font-family: "Kabel Neue";
  font-style: normal;
  font-weight: 700;
  src: url('/static/assets/kabel-neue-700.woff');
}
@font-face {
  font-family: "Kabel Neue";
  font-style: italic;
  font-weight: 700;
  src: url('/static/assets/kabel-neue-700italic.woff');
}
`;
