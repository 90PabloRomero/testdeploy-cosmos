import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
      </Html>
    );
  }
}
