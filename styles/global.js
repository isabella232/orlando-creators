import colors from './colors';
import typography from './typography';

export default `
* {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

html {
  background-color: ${colors.blueTT};
  font-family: ${typography.text};
  font-feature-settings: common-ligatures;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
}

p {
  font-size: 18px;
  line-height: 2;
  margin-bottom: 2em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  max-width: 37em;
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
