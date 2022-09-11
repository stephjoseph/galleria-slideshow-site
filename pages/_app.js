import Layout from '../components/Layout';
import SlideshowProvider from '../context/SlideshowContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SlideshowProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SlideshowProvider>
  );
}

export default MyApp;
