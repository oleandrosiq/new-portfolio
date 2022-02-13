import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/styled';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/svg" href="/favicon.svg" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}