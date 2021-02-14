import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="ko" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
