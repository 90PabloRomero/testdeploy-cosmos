import Head from "next/head";
import { useRouter } from "next/router";
import GlobalStyles from "../styles/globalStyles";
import { createWrapper } from 'next-redux-wrapper';
import configureStore from '../redux/store';
// export default App;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Proyecto Cosmos</title>  
      </Head>
      <>
        <Component {...pageProps} />
      </>
      
    </>
  );
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};
const wrapper = createWrapper(configureStore);
export default wrapper.withRedux(MyApp);
