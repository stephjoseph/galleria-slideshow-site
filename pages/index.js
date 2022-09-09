import Main from '../components/home/Main';
import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());

  return {
    props: {
      gallery: data,
    },
  };
};

export default function Home({ gallery }) {
  return (
    <>
      <Head>
        <title>Galleria | Home</title>
      </Head>
      <Main gallery={gallery} />
    </>
  );
}
