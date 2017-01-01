import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import global from '../styles/global';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return { ...page, style };
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
          <script src="https://use.typekit.net/fkk3wrp.js" async="true" />
          <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
        </body>
      </html>
    );
  }
}
