import color from './colors';
import typography from './typography';

export default `
* {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

html {
  background-color: ${color.blueTT};
  font-family: ${typography.text};
  font-feature-settings: common-ligatures;
  font-size: 16px;
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
`;
