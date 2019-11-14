import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>NEXT JS</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
