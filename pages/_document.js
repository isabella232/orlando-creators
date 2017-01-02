import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import global from '../styles/global';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return { ...page, style };
  }
  loadTypekit() {
    return { __html: 'try{Typekit.load({ async: true });}catch(e){}' };
  }
  render() {
    return (
      <html>
        <Head>
          <title>Orlando Creators</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>{global}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://use.typekit.net/xua7kmr.js" />
          <script dangerouslySetInnerHTML={this.loadTypekit()} />
        </body>
      </html>
    );
  }
}
