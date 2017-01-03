import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import global from '../styles/global';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return { ...page, style };
  }
  loadGA() {
    return {
      __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-89719578-1', 'auto');
        ga('send', 'pageview');`
    };
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
          <script dangerouslySetInnerHTML={this.loadGA()} />
          <script src="https://use.typekit.net/xua7kmr.js" />
          <script dangerouslySetInnerHTML={this.loadTypekit()} />
        </body>
      </html>
    );
  }
}
