import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/favicon-32x32.png'
        />
      </Head>
      <div className='mx-auto grid w-full max-w-[1920px] place-items-center bg-white'>
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
